import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../Logo/Logo";
import UserLogOut from "../UserLogOut/UserLogOut";
import "../EditActivityPage/EditActivityPage.css";


export default function EditActivityPage({ updateActivity, activities, user, setUser }) {
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
        <main className="EditActivityPage">
            <aside>
                <Logo />
                <Link to="/activities" className="button btn-sm">ACTIVITY LIST</Link>
                <UserLogOut user={user} setUser={setUser} />
            </aside>
                <div className="Form">
                    <h1>Update Activity</h1>
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
        </main>
    );
}