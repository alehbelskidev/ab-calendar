import { type Dayjs } from "dayjs"
import { type HTMLAttributes, useMemo } from "react"
import { cn } from "@/lib/utils"

type CalendarDayGridProps = HTMLAttributes<HTMLDivElement> & {
	colStart?: number
	onCellClick?: (date: Dayjs) => void
}

const CalendarDayGrid = ({ colStart = 1 }: CalendarDayGridProps) => {
	const cells = useMemo(() => {
		return new Array(24).fill(0).map((_, index) => {
			const row = index + 2
			const col = colStart

			return {
				key: `${index}`,
				gridClass: `[grid-column:${col}] [grid-row:${row}]`,
				borderClass: index < 23 ? "border-b" : "",
				col,
				row,
				index,
			}
		})
	}, [colStart])

	return (
		<>
			{cells.map(({ key, gridClass, col, row, borderClass }) => (
				<div
					key={key}
					className={cn("border-gray-200", gridClass, borderClass)}
					style={{
						gridColumn: col,
						gridRow: row,
					}}
				></div>
			))}
		</>
	)
}

export default CalendarDayGrid
