import { type HTMLAttributes, forwardRef } from "react"
import * as Slot from "@radix-ui/react-slot"
import { useCalendar } from "./use-calendar"
import { cn } from "@/lib/utils"

type CalendarDateTitleProps = HTMLAttributes<HTMLHeadingElement> & {
    format?: string
    asChild?: boolean
}

const CalendarDateTitle = forwardRef<HTMLHeadingElement, CalendarDateTitleProps>(
    ({ format = "MMMM D, YYYY", asChild = false, className, ...props }, ref) => {
        const { today } = useCalendar()
        const Comp = asChild ? Slot.Root : "h2"

        return (
            <Comp ref={ref} className={cn("text-2xl font-bold", className)} {...props}>{props.children ?? today.format(format)}</Comp>
        )
    }
)


CalendarDateTitle.displayName = "CalendarDateTitle"

export default CalendarDateTitle