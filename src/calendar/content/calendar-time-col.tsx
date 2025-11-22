import dayjs from "dayjs"
import {
	Children,
	cloneElement,
	type HTMLAttributes,
	isValidElement,
	type ReactNode,
	useMemo,
} from "react"
import { cn } from "@/lib/utils"

type CalendarTimeColProps = HTMLAttributes<HTMLDivElement> & {
	colStart?: number
	hourStart?: number
	format?: string
	index?: number
	total?: number
	children?: ReactNode
}

const CalendarTimeCol = ({
	colStart = 1,
	hourStart = 0,
	format = "HH",
	index = 1,
	total = 1,
	className,
	children,
}: CalendarTimeColProps) => {
	const divider = total > 1 && index > 1
	const updatedChildren = Children.map(children, (child) => {
		if (!isValidElement(child)) return child
		return cloneElement(child, {
			divider,
			...(child.props as HTMLAttributes<HTMLDivElement>),
		} as { divider: boolean; props: HTMLAttributes<HTMLDivElement> })
	})

	const cols = useMemo(() => {
		return new Array(24).fill(0).map((_, index) => {
			const hour = index + hourStart
			const row = index + 2
			const title = dayjs().hour(hour).format(format)
			return {
				title,
				key: `${hour}`,
				row,
				col: colStart,
			}
		})
	}, [colStart, hourStart, format])

	return (
		<>
			{updatedChildren}
			{cols.map(({ title, key, row, col }) => (
				<div
					key={key}
					className={cn(
						"border-b border-gray-200 px-1",
						divider && "border-l",
						className
					)}
					style={{
						gridColumn: col,
						gridRow: row,
					}}
				>
					{title}
				</div>
			))}
		</>
	)
}

CalendarTimeCol.displayName = "CalendarTimeCol"
export default CalendarTimeCol
