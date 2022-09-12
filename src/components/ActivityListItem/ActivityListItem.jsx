export default function ActivityListItem({ activity, index, day }) {
 
    if (JSON.stringify({day}) === JSON.stringify({activity})) {
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