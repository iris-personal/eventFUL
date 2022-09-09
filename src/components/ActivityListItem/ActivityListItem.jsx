export default function ActivityListItem({ activity, index }) {
    return (
        <li className="ActivityListItem">
            <span>{activity.time}</span>
            <span>{activity.name}</span>
        </li>

        // <p>No Activities Yet!</p>
    );
}