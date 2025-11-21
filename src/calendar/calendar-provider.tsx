import { type PropsWithChildren } from "react"
import dayjs, { Dayjs } from "dayjs"
import { CalendarContext, DEFAULT_TIMZEONE } from "./calendar-ctx"

type CalendarProviderProps = PropsWithChildren<{
  timezone?: string
  today?: Dayjs
}>

export const CalendarProvider = ({ children, timezone = DEFAULT_TIMZEONE, today = dayjs().tz(DEFAULT_TIMZEONE) }: CalendarProviderProps) => {
  return (
    <CalendarContext.Provider value={{ timezone, today }}>
      {children}
    </CalendarContext.Provider>
  )
}