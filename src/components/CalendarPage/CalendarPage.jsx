import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./CalendarPage.css"

export default function CalendarPage({ day, setSelectedDay }) {
    // function handleSelectedDay(evt) {
    //     console.log(evt.target.value);
    // }

    return (
    <>  
      <Calendar
        value={day}
        onChange={setSelectedDay}
        calendarClassName="responsive-calendar"
        shouldHighlightWeekends
      />
    </>
  );

}