import { Slot } from "@radix-ui/react-slot"
import { ChevronLeft } from "lucide-react"
import { forwardRef, type HTMLAttributes } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CalendarHeaderNavPrevButtonProps = HTMLAttributes<HTMLButtonElement> & {
	asChild?: boolean
}

const CalendarHeaderNavPrevButton = forwardRef<
	HTMLButtonElement,
	CalendarHeaderNavPrevButtonProps
>(({ asChild = false, className, ...props }, ref) => {
	const Comp = asChild ? Slot : Button
	return (
		<Comp
			ref={ref}
			className={cn("flex items-center justify-center", className)}
			{...props}
		>
			{props.children ?? <ChevronLeft className="size-4" />}
		</Comp>
	)
})

CalendarHeaderNavPrevButton.displayName = "CalendarHeaderNavPrevButton"
export default CalendarHeaderNavPrevButton
