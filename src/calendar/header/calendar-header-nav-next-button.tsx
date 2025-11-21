import { Slot } from "@radix-ui/react-slot"
import { ChevronRight } from "lucide-react"
import { forwardRef, type HTMLAttributes } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CalendarHeaderNavNextButtonProps = HTMLAttributes<HTMLButtonElement> & {
	asChild?: boolean
}

const CalendarHeaderNavNextButton = forwardRef<
	HTMLButtonElement,
	CalendarHeaderNavNextButtonProps
>(({ asChild = false, className, ...props }, ref) => {
	const Comp = asChild ? Slot : Button
	return (
		<Comp
			ref={ref}
			className={cn("flex items-center justify-center", className)}
			{...props}
		>
			{props.children ?? <ChevronRight className="size-4" />}
		</Comp>
	)
})

CalendarHeaderNavNextButton.displayName = "CalendarHeaderNavNextButton"
export default CalendarHeaderNavNextButton
