import { useState, useMemo, type PropsWithChildren, useCallback } from "react"
import dayjs, { Dayjs } from "dayjs"
import { CalendarContext, DEFAULT_TIMZEONE } from "./calendar-ctx"

type CalendarProviderProps = PropsWithChildren<{
	timezone?: string
	today?: Dayjs
}>

export const CalendarProvider = ({
	children,
	timezone = DEFAULT_TIMZEONE,
	today = dayjs().tz(DEFAULT_TIMZEONE),
}: CalendarProviderProps) => {
	const [view, setView] = useState<"month" | "week" | "day">("month")
	const [todayDate, setTodayDate] = useState<Dayjs>(today)

	const handleTodayChange = useCallback((newToday: Dayjs) => {
		setTodayDate(newToday)
	}, [])

	const handleViewChange = useCallback((newView: "month" | "week" | "day") => {
		setView(newView)
	}, [])

	const value = useMemo(
		() => ({
			timezone,
			today: todayDate,
			view,
			onViewChange: handleViewChange,
			onTodayChange: handleTodayChange,
		}),
		[timezone, todayDate, view, handleTodayChange, handleViewChange]
	)

	return (
		<CalendarContext.Provider value={value}>
			{children}
		</CalendarContext.Provider>
	)
}
