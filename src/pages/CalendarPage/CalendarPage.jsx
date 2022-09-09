import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import CalendarDate from "./CalendarDate";
import "./CalendarPage.css"

export default function CalendarPage({ day, setSelectedDay}) {
  return (
    <>   
    <Calendar
      value={day}
      onChange={setSelectedDay}
      calendarClassName="responsive-calendar" // added this
      shouldHighlightWeekends
    />
    <CalendarDate day={day} />
    </>
  );

}