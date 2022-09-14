import { useNavigate } from "react-router-dom";

export default function ActivityListItem({ activity, index, deleteActivity }) { 
    const navigate = useNavigate();   
    return (
            <li className="ActivityListItem">
                <span>{activity.date}</span> 
                <span>{activity.time}</span>
                <span>{activity.name}</span>
                <button onClick={() => deleteActivity(activity._id)}>X</button>
                <button onClick={() => navigate(`/activities/${activity._id}/edit`)}>Update</button>
            </li>
        );
}