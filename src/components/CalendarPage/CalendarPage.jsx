import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import "./CalendarPage.css"

export default function CalendarPage({ selectedDay, setSelectedDay }) {
   
    return (
    <>  
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        calendarClassName="responsive-calendar"
        shouldHighlightWeekends
      />
    </>
  );

}