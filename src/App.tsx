import { CalendarProvider, CalendarRoot, CalendarHeader, CalendarFooter, CalendarContent, CalendarMonthView, CalendarWeekView, CalendarDayView } from "./calendar"

function App() {
  return (
    <CalendarProvider>
      <CalendarRoot>
        <CalendarHeader>Header</CalendarHeader>
        <CalendarContent>
          <CalendarMonthView />
          <CalendarWeekView />
          <CalendarDayView />
        </CalendarContent>
        <CalendarFooter>Footer</CalendarFooter>
      </CalendarRoot>
    </CalendarProvider>
  )
}

export default App
