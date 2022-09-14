import { useNavigate } from "react-router-dom";

export default function ActivityListItem({ activity, index, deleteActivity }) { 
    const navigate = useNavigate();   
    return (
            <div className="ActivityListItem">
                <span><h4>{activity.date} {activity.time} {activity.name}</h4></span>
                <div>
                    <button onClick={() => deleteActivity(activity._id)}>X</button>
                    <button onClick={() => navigate(`/activities/${activity._id}/edit`)}>Update</button>
                </div>
            </div>
        );
}