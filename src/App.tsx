import { CalendarProvider, CalendarRoot, CalendarHeader, CalendarFooter, CalendarContent } from "./calendar"

function App() {
  return (
    <CalendarProvider>
      <CalendarRoot>
        <CalendarHeader>Header</CalendarHeader>
        <CalendarContent>Content</CalendarContent>
        <CalendarFooter>Footer</CalendarFooter>
      </CalendarRoot>
    </CalendarProvider>
  )
}

export default App
