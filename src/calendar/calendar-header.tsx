import { type  HTMLAttributes, forwardRef } from "react"
import * as Slot from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

type CalendarHeaderProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

const CalendarHeader = forwardRef<HTMLDivElement, CalendarHeaderProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "div"

    return (
      <Comp
        data-slot="calendar-header"
        ref={ref}
        className={cn("flex items-center justify-between", className)}
        {...props}
      />
    )
  }
)

CalendarHeader.displayName = "CalendarHeader"

export default CalendarHeader