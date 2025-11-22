import dayjs, { Dayjs } from "dayjs"
import { type HTMLAttributes, useMemo } from "react"
import { cn } from "@/lib/utils"

type CalendarDayHeaderProps = HTMLAttributes<HTMLDivElement> & {
	format?: string
	onHeaderCellClick?: (date: Dayjs) => void
	colStart?: number
}

const CalendarDayHeader = ({
	format = "dddd",
	className = "",
	onHeaderCellClick,
	colStart = 1,
}: CalendarDayHeaderProps) => {
	const { title, gridClass, col, date } = useMemo(() => {
		const date = dayjs().startOf("day")

		const col = colStart + 1
		return {
			title: date.format(format),
			gridClass: `[grid-column:${col}] [grid-row:1]`,
			col,
			date,
		}
	}, [format, colStart])

	return (
		<button
			type="button"
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
	)
}

CalendarDayHeader.displayName = "CalendarDayHeader"

export default CalendarDayHeader
