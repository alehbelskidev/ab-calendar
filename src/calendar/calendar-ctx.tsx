import dayjs, { type Dayjs } from "dayjs"
import { createContext } from "react"

export const DEFAULT_TIMZEONE = Intl.DateTimeFormat().resolvedOptions().timeZone

type CalendarContextType = {
  timezone: string
  today: Dayjs
}

export const CalendarContext = createContext<CalendarContextType>({
  timezone: DEFAULT_TIMZEONE,
  today: dayjs().tz(DEFAULT_TIMZEONE),
})