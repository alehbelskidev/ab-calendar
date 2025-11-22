import { type Dayjs } from "dayjs"
import { type HTMLAttributes, useMemo } from "react"
import { cn } from "@/lib/utils"

type CalendarWeekGridProps = HTMLAttributes<HTMLDivElement> & {
	colStart?: number
	onCellClick?: (date: Dayjs) => void
}

const CalendarWeekGrid = ({ colStart = 1 }: CalendarWeekGridProps) => {
	const cells = useMemo(() => {
		// 24 rows (hours) × 7 columns (days) = 168 cells
		// Grid cells start at row 2 (after header) and column colStart (after time columns)
		return new Array(24 * 7).fill(0).map((_, index) => {
			// Row-first iteration: each row has 7 cells (one per day)
			const hour = Math.floor(index / 7) // 0-23 (24 hours)
			const dayIndex = index % 7 // 0-6 (day of week)

			// Row starts at 2 (after header row 1), columns start at colStart
			const row = hour + 2 // 2-25 (24 hours, starting after header)
			const col = dayIndex + colStart // colStart to colStart+6 (7 days)

			return {
				key: `${hour}-${dayIndex}`,
				gridClass: `[grid-column:${col}] [grid-row:${row}]`,
				borderClass: hour < 23 ? "border-b" : "",
				col,
				row,
				hour, // 0-23
				dayIndex, // 0-6 (day of week)
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

export default CalendarWeekGrid
