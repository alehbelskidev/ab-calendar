import { type HTMLAttributes, forwardRef } from "react"
import * as Slot from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

type CalendarFooterProps = HTMLAttributes<HTMLDivElement> & {
	asChild?: boolean
}

const CalendarFooter = forwardRef<HTMLDivElement, CalendarFooterProps>(
	({ asChild = false, className, ...props }, ref) => {
		const Comp = asChild ? Slot.Root : "div"

		return (
			<Comp
				data-slot="calendar-footer"
				ref={ref}
				className={cn("flex items-center justify-between", className)}
				{...props}
			/>
		)
	}
)

CalendarFooter.displayName = "CalendarFooter"

export default CalendarFooter
