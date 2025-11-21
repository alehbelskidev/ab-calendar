import { type  HTMLAttributes, forwardRef } from "react"
import * as Slot from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

type CalendarProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

const CalendarRoot = forwardRef<HTMLDivElement, CalendarProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "div"

    return (
      <Comp
        data-slot="calendar-root"
        ref={ref}
        className={cn("w-full h-full flex flex-col gap-4", className)}
        {...props}
      />
    )
  }
)

CalendarRoot.displayName = "CalendarRoot"

export default CalendarRoot