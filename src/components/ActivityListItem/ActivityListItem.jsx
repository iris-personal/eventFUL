export default function ActivityListItem({ activity, index, day }) {
 
        if (JSON.stringify({day}) === JSON.stringify({activity.date}) ) {
            <li className="ActivityListItem">
                <span>{activity.time}</span>
                <span>{activity.name}</span>
            </li>
        } else {
            <p>No Activities For {day.month}/{day.day}/{day.year} Yet!</p> 
        }


        
    
}