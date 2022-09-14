import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import "./CalendarPage.css"

export default function CalendarPage({ day, setSelectedDay }) {
   
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