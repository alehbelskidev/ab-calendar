import { Dayjs } from "dayjs"
import {
	Children,
	cloneElement,
	type HTMLAttributes,
	isValidElement,
	useMemo,
} from "react"
import { cn } from "@/lib/utils"
import { useCalendar } from "../../use-calendar"

type CalendarMonthGridProps = HTMLAttributes<HTMLDivElement> & {
	cellClass?: string
	cellFormat?: string
	todayCellClass?: string
	differentMonthCellClass?: string
	onCellClick?: (date: Dayjs) => void
}

const CalendarMonthGrid = ({
	cellClass = "",
	cellFormat = "DD",
	todayCellClass = "font-bold",
	differentMonthCellClass = "text-gray-400",
	children,
}: CalendarMonthGridProps) => {
	const { today, viewDate } = useCalendar()

	const cells = useMemo(() => {
		const firstDayOfMonth = viewDate.startOf("month")
		const startOfCalendarGrid = firstDayOfMonth.startOf("week")

		return new Array(6 * 7).fill(0).map((_, index) => {
			const date = startOfCalendarGrid.add(index, "day")
			const row = Math.floor(index / 7) + 1
			const col = index % 7

			return {
				title: date.format(cellFormat),
				key: date.format("YYYY-MM-DD"),
				gridClass: `col-start-${col + 1} row-start-${row + 1}`,
				isCurrentMonth: date.isSame(viewDate, "month"),
				isToday: date.isSame(today, "day"),
				date,
			}
		})
	}, [cellFormat, today, viewDate])

	return (
		<>
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
					{Children.map(children, (child) => {
						if (!isValidElement(child)) {
							return child
						}
						return cloneElement(child, {
							...(child.props as HTMLAttributes<HTMLButtonElement>),
							date,
						} as HTMLAttributes<HTMLButtonElement> & { date: Dayjs })
					})}
				</div>
			))}
		</>
	)
}

CalendarMonthGrid.displayName = "CalendarMonthGrid"

export default CalendarMonthGrid
