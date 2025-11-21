import {
	CalendarProvider,
	CalendarRoot,
	CalendarHeader,
	CalendarFooter,
	CalendarContent,
	CalendarMonthView,
	CalendarWeekView,
	CalendarDayView,
	CalendarDateTitle,
	CalendarViewSwitcher,
	CalendarViewSwitcherButton,
	CalendarTodayButton,
} from "./calendar"

function App() {
	return (
		<CalendarProvider>
			<CalendarRoot>
				<CalendarHeader>
					<CalendarDateTitle />
					<CalendarViewSwitcher>
						<CalendarViewSwitcherButton view="month">
							Month
						</CalendarViewSwitcherButton>
						<CalendarViewSwitcherButton view="week">
							Week
						</CalendarViewSwitcherButton>
						<CalendarViewSwitcherButton view="day">
							Day
						</CalendarViewSwitcherButton>
					</CalendarViewSwitcher>
					<CalendarTodayButton>Today</CalendarTodayButton>
				</CalendarHeader>
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
