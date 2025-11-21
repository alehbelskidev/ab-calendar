import dayjs, { type Dayjs } from "dayjs"
import { createContext } from "react"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"

dayjs.extend(timezone)
dayjs.extend(utc)

export const DEFAULT_TIMZEONE = Intl.DateTimeFormat().resolvedOptions().timeZone

type CalendarContextType = {
  timezone: string
  today: Dayjs
}

export const CalendarContext = createContext<CalendarContextType>({
  timezone: DEFAULT_TIMZEONE,
  today: dayjs().tz(DEFAULT_TIMZEONE),
})