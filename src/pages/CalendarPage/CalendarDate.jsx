export default function CalendarDate({ day }) {
    
    if (day) return (  
        <h1>{day.month}/{day.day}/{day.year}</h1>
    );
}