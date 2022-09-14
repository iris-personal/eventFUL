export default function ActivityListItem({ activity, index, day }) { 

        return (
            <li className="ActivityListItem">
                <span>{activity.time}</span>
                <span>{activity.name}</span>
            </li>
        );
}