import { type  HTMLAttributes, forwardRef } from "react"
import * as Slot from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

type CalendarContentProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

const CalendarContent = forwardRef<HTMLDivElement, CalendarContentProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "div"

    return (
      <Comp
        data-slot="calendar-content"
        ref={ref}
        className={cn("w-full h-full grid grid-cols-7 grid-rows-6 flex-1", className)}
        {...props}
      />
    )
  }
)

CalendarContent.displayName = "CalendarContent"

export default CalendarContent