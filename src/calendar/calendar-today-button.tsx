import { type HTMLAttributes, forwardRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import * as Slot from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { useCalendar } from "./use-calendar"
import dayjs from "dayjs"

type CalendarTodayButtonProps = HTMLAttributes<HTMLButtonElement> & {
	asChild?: boolean
}

const CalendarTodayButton = forwardRef<
	HTMLButtonElement,
	CalendarTodayButtonProps
>(({ asChild = false, className, ...props }, ref) => {
	const { today, onTodayChange } = useCalendar()
	const Comp = asChild ? Slot.Root : Button

	const handleClick = useCallback(() => {
		if (today.isSame(dayjs(), "day")) return

		onTodayChange(dayjs())
	}, [onTodayChange])

	return (
		<Comp
			ref={ref}
			className={cn(className)}
			onClick={handleClick}
			{...props}
		/>
	)
})

CalendarTodayButton.displayName = "CalendarTodayButton"

export default CalendarTodayButton
