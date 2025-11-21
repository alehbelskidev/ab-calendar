import {
	CalendarContent,
	CalendarDateTitle,
	CalendarDayView,
	CalendarFooter,
	CalendarHeader,
	CalendarMonthCellButton,
	CalendarMonthGrid,
	CalendarMonthHeader,
	CalendarMonthView,
	CalendarProvider,
	CalendarRoot,
	CalendarTodayButton,
	CalendarViewSwitcher,
	CalendarViewSwitcherButton,
	CalendarWeekView,
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
					<CalendarMonthView>
						<CalendarMonthHeader
							onHeaderCellClick={(date) => console.log(date)}
						/>
						<CalendarMonthGrid>
							<CalendarMonthCellButton onClick={(date) => console.log(date)} />
						</CalendarMonthGrid>
					</CalendarMonthView>
					<CalendarWeekView />
					<CalendarDayView />
				</CalendarContent>
				<CalendarFooter>Footer</CalendarFooter>
			</CalendarRoot>
		</CalendarProvider>
	)
}

export default App
