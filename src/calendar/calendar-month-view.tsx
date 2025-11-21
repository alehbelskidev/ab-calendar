import dayjs, { Dayjs } from "dayjs"
import { type HTMLAttributes, useMemo } from "react"
import { cn } from "@/lib/utils"
import { useCalendar } from "./use-calendar"
import { Plus } from "lucide-react"

type CalendarMonthViewProps = HTMLAttributes<HTMLDivElement> & {
	headerCellFormat?: string
	headerCellClass?: string
	cellClass?: string
	cellFormat?: string
	todayCellClass?: string
	differentMonthCellClass?: string
	onHeaderCellClick?: (date: Dayjs) => void
	onCellClick?: (date: Dayjs) => void
}

const CalendarMonthView = ({
	headerCellFormat = "dddd",
	headerCellClass = "",
	cellClass = "",
	cellFormat = "DD",
	todayCellClass = "text-blue-500",
	differentMonthCellClass = "text-gray-400",
	className,
	onHeaderCellClick,
	onCellClick,
	...props
}: CalendarMonthViewProps) => {
	const { today } = useCalendar()

	const headers = useMemo(() => {
		return new Array(7).fill(0).map((_, index) => {
			const date = dayjs().startOf("week").add(index, "day")

			return {
				title: date.format(headerCellFormat),
				key: date.format("YYYY-MM-DD"),
				gridClass: `col-start-${index + 1}`,
				date,
			}
		})
	}, [headerCellFormat])

	const cells = useMemo(() => {
		const firstDayOfMonth = today.startOf("month")
		const startOfCalendarGrid = firstDayOfMonth.startOf("week")

		return new Array(6 * 7).fill(0).map((_, index) => {
			const date = startOfCalendarGrid.add(index, "day")
			const row = Math.floor(index / 7)
			const col = index % 7

			return {
				title: date.format(cellFormat),
				key: date.format("YYYY-MM-DD"),
				gridClass: `col-start-${col + 1} row-start-${row + 1}`,
				isCurrentMonth: date.isSame(today, "month"),
				isToday: date.isSame(today, "day"),
				date,
			}
		})
	}, [cellFormat, today])

	return (
		<div
			data-calendar-view="month"
			className={cn("w-full h-full grid grid-cols-7 grid-rows-7", className)}
			{...props}
		>
			{headers.map(({ title, key, gridClass, date }) => (
				<button
					type="button"
					key={key}
					className={cn(
						"text-center font-semibold border-b cursor-pointer",
						headerCellClass,
						gridClass
					)}
					onClick={() => onHeaderCellClick?.(date)}
				>
					{title}
				</button>
			))}
			{cells.map(({ title, key, gridClass, isCurrentMonth, isToday, date }) => (
				<div
					key={key}
					className={cn(
						"text-center border-b border-r flex flex-col",
						!isCurrentMonth ? differentMonthCellClass : "",
						isToday ? todayCellClass : "",
						cellClass,
						gridClass
					)}
				>
					{title}
					<button
						type="button"
						className="flex-1 py-2 w-full hover:bg-gray-50 group flex items-center justify-center transition-colors"
						onClick={() => onCellClick?.(date)}
						aria-label={date.format("YYYY-MM-DD")}
					>
						<Plus className="size-4 text-transparent group-hover:text-gray-300 transition-colors" />
					</button>
				</div>
			))}
		</div>
	)
}

CalendarMonthView.displayName = "CalendarMonthView"

export default CalendarMonthView
