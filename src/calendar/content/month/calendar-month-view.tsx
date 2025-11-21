import { type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type CalendarMonthViewProps = HTMLAttributes<HTMLDivElement> & {
	cellClass?: string
}

const CalendarMonthView = ({
	className,
	children,
	...props
}: CalendarMonthViewProps) => {
	return (
		<div
			data-calendar-view="month"
			className={cn("w-full h-full grid grid-cols-7 grid-rows-7", className)}
			{...props}
		>
			{children}
		</div>
	)
}

CalendarMonthView.displayName = "CalendarMonthView"

export default CalendarMonthView
