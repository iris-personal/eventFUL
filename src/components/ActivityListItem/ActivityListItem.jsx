export default function ActivityListItem({ activity, index, day }) {
  // not comparing day to activity.day will need to do this in order to render correctly  
    if ({day} === {activity}) {
        return (
            <li className="ActivityListItem">
                <span>{activity.time}</span>
                <span>{activity.name}</span>
            </li>
        );
    } else {
        return (
            <p>No Activities For {day.month}/{day.day}/{day.year} Yet!</p> 
        );
    } 
}