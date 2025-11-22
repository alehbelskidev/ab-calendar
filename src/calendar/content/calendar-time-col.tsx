import dayjs from "dayjs"
import { type HTMLAttributes, useMemo } from "react"
import { cn } from "@/lib/utils"

type CalendarTimeColProps = HTMLAttributes<HTMLDivElement> & {
	colStart?: number
	hourStart?: number
	format?: string
	index?: number
	total?: number
}

const CalendarTimeCol = ({
	colStart = 1,
	hourStart = 0,
	format = "HH",
	index = 1,
	total = 1,
	className,
}: CalendarTimeColProps) => {
	console.log("index", index, total)
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
			{cols.map(({ title, key, row, col }) => (
				<div
					key={key}
					className={cn(
						"border-b border-gray-200 px-1",
						total > 1 && index > 1 && "border-l",
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
