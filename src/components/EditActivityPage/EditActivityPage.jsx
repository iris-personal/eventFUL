import { useParams } from "react-router-dom";
import { useState } from "react";

export default function EditActivityPage({ updateActivity, activities }) {
    const {id} = useParams();
    let editActivity = activities.find(activity => activity._id === id);
    const [newActivity, setNewActivity] = useState(editActivity);
    if (!editActivity) return null;

    function handleChange(evt) {
        const updatedActivity = { ...newActivity, [evt.target.name]: evt.target.value };
        setNewActivity(updatedActivity);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        updateActivity(newActivity, id);
    }

    return (
        <div>
        <h1>Update Activity</h1>
        <div className="Form">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Date</label>
                <input type="date" name="date" value={newActivity.date} onChange={handleChange} required />
                <label>Time of Activity</label>
                <input type="string" name="time" value={newActivity.time} onChange={handleChange} required />
                <label>Activitiy</label>
                <input type="text" name="name" value={newActivity.name} onChange={handleChange} required />
                <button type="submit">UPDATE ACTIVITY</button>
            </form>
        </div>
    </div>
    );
}