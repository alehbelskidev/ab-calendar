import { type PropsWithChildren } from "react"
import dayjs from "dayjs"
import { CalendarContext, DEFAULT_TIMZEONE } from "./calendar-ctx"

export const CalendarProvider = ({ children }: PropsWithChildren) => {
  const timezone = DEFAULT_TIMZEONE
  const today = dayjs().tz(DEFAULT_TIMZEONE)

  return (
    <CalendarContext.Provider value={{ timezone, today }}>
      {children}
    </CalendarContext.Provider>
  )
}