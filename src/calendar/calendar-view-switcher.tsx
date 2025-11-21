import { type HTMLAttributes, forwardRef } from "react"
import * as Slot from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { ButtonGroup } from "@/components/ui/button-group"

type CalendarViewSwitcherProps = HTMLAttributes<HTMLDivElement> & {
	asChild?: boolean
}

const CalendarViewSwitcher = forwardRef<
	HTMLDivElement,
	CalendarViewSwitcherProps
>(({ asChild = false, className, ...props }, ref) => {
	const Comp = asChild ? Slot.Root : ButtonGroup

	return <Comp ref={ref} className={cn(className)} {...props} />
})

CalendarViewSwitcher.displayName = "CalendarViewSwitcher"

export default CalendarViewSwitcher
