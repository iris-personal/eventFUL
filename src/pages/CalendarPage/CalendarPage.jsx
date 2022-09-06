import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./CalendarPage.css"

export default function CalnedarPage() {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      calendarClassName="responsive-calendar" // added this
      shouldHighlightWeekends
    />
  );
}