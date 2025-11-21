import { type HTMLAttributes, useMemo } from "react"
import { cn } from "@/lib/utils"

type CalendarTimeColProps = HTMLAttributes<HTMLDivElement> & {
	colStart?: number
}

const CalendarTimeCol = ({ colStart = 1, className }: CalendarTimeColProps) => {
	const cols = useMemo(() => {
		return new Array(24).fill(0).map((_, index) => {
			const row = index + 2
			return {
				title: `${index}:00`,
				key: `${index}:00`,
				row,
				col: colStart,
			}
		})
	}, [colStart])

	console.log("time col colStart", colStart)

	return (
		<>
			{cols.map(({ title, key, row, col }) => (
				<div
					key={key}
					className={cn(className)}
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
