import { Slot } from "@radix-ui/react-slot"
import { forwardRef, type HTMLAttributes, useMemo } from "react"
import { cn } from "@/lib/utils"
import { useCalendar } from "../use-calendar"

type CalendarDateTitleProps = HTMLAttributes<HTMLHeadingElement> & {
	format?: string
	asChild?: boolean
}

const CalendarDateTitle = forwardRef<
	HTMLHeadingElement,
	CalendarDateTitleProps
>(({ format = "MMMM, YYYY", asChild = false, className, ...props }, ref) => {
	const { viewDate, view } = useCalendar()
	const Comp = asChild ? Slot : "h2"

	const smartFormat = useMemo(() => {
		if (format) return format

		if (view === "month") {
			return "MMMM YYYY"
		} else if (view === "week") {
			return "MMMM YYYY"
		} else {
			return "MMMM D, YYYY"
		}
	}, [view, format])

	return (
		<Comp ref={ref} className={cn("text-2xl font-bold", className)} {...props}>
			{props.children ?? viewDate.format(smartFormat)}
		</Comp>
	)
})

CalendarDateTitle.displayName = "CalendarDateTitle"

export default CalendarDateTitle
