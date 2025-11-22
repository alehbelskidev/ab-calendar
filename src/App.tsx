import {
	CalendarContent,
	CalendarDateTitle,
	CalendarDayView,
	CalendarFooter,
	CalendarHeader,
	CalendarHeaderNav,
	CalendarHeaderNavNextButton,
	CalendarHeaderNavPrevButton,
	CalendarMonthCellButton,
	CalendarMonthGrid,
	CalendarMonthHeader,
	CalendarMonthView,
	CalendarProvider,
	CalendarRoot,
	CalendarTimeCol,
	CalendarTimeColHeader,
	CalendarTodayButton,
	CalendarViewSwitcher,
	CalendarViewSwitcherButton,
	CalendarWeekGrid,
	CalendarWeekHeader,
	CalendarWeekView,
} from "./calendar"

function App() {
	return (
		<div className="min-h-screen w-full p-4 flex flex-col">
			<CalendarProvider>
				<CalendarRoot>
					<CalendarHeader>
						<CalendarDateTitle />
						<CalendarHeaderNav>
							<CalendarHeaderNavPrevButton />
							<CalendarHeaderNavNextButton />
						</CalendarHeaderNav>
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
								<CalendarMonthCellButton
									onClick={(date) => console.log(date)}
								/>
							</CalendarMonthGrid>
						</CalendarMonthView>
						<CalendarWeekView>
							<CalendarTimeCol format="h A" hourStart={5}>
								<CalendarTimeColHeader>GMT-6</CalendarTimeColHeader>
							</CalendarTimeCol>
							<CalendarTimeCol format="H">
								<CalendarTimeColHeader>GMT+1</CalendarTimeColHeader>
							</CalendarTimeCol>
							<CalendarWeekHeader
								onHeaderCellClick={(date) => console.log(date)}
							/>
							<CalendarWeekGrid />
						</CalendarWeekView>
						<CalendarDayView />
					</CalendarContent>
					<CalendarFooter>Footer</CalendarFooter>
				</CalendarRoot>
			</CalendarProvider>
		</div>
	)
}

export default App
