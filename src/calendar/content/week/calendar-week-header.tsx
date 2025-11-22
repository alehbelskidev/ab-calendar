import dayjs, { Dayjs } from "dayjs"
import { type HTMLAttributes, useMemo } from "react"
import { cn } from "@/lib/utils"

type CalendarWeekHeaderProps = HTMLAttributes<HTMLDivElement> & {
	format?: string
	onHeaderCellClick?: (date: Dayjs) => void
	colStart?: number
}

const CalendarWeekHeader = ({
	format = "dddd",
	className = "",
	onHeaderCellClick,
	colStart = 1,
}: CalendarWeekHeaderProps) => {
	const headers = useMemo(() => {
		return new Array(7).fill(0).map((_, index) => {
			const date = dayjs().startOf("week").add(index, "day")

			const col = index + colStart
			return {
				title: date.format(format),
				key: date.format("YYYY-MM-DD"),
				gridClass: `[grid-column:${col}] [grid-row:1]`,
				col,
				date,
			}
		})
	}, [format, colStart])

	return (
		<>
			{headers.map(({ title, key, gridClass, col, date }) => (
				<button
					type="button"
					key={key}
					className={cn(
						"text-center font-semibold cursor-pointer",
						className,
						gridClass
					)}
					style={{
						gridColumn: col,
						gridRow: 1,
					}}
					onClick={() => onHeaderCellClick?.(date)}
				>
					{title}
				</button>
			))}
		</>
	)
}

CalendarWeekHeader.displayName = "CalendarWeekHeader"

export default CalendarWeekHeader
