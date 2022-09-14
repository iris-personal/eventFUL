import { Link } from 'react-router-dom';
import { useState } from "react";
import Logo from "../Logo/Logo";
import UserLogOut from "../UserLogOut/UserLogOut";
import "../NewActivityForm/NewActivityForm.css"
import CalendarPage from "../CalendarPage/CalendarPage";


export default function NewActivityForm({ addActivity, user, setUser }) {
    const [newActivity, setNewActivity] = useState({
        date: "",
        time: "",
        name: ""
    })

    function handleSubmit(evt) {
        evt.preventDefault();
        addActivity(newActivity);
        setNewActivity({
            date: "",
            time: "",
            name: ""
        });
    }

   function handleChange(evt) {
        setNewActivity({ ...newActivity, [evt.target.name]: evt.target.value });
    }

    return (
        <main className="NewActivityPage">
            <aside>
                <Logo />
                <Link to="/activities" className="button btn-sm">ACTIVITY LIST</Link>
                <UserLogOut user={user} setUser={setUser} />
            </aside>
            <div>
                <h1>Add Activity</h1>
                <div className="Form">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <label>Date</label>
                        <input type="date" name="date" value={newActivity.date} onChange={handleChange} required />
                        <label>Time of Activity</label>
                        <input type="string" name="time" value={newActivity.time} onChange={handleChange} required />
                        <label>Activitiy</label>
                        <input type="text" name="name" value={newActivity.name} onChange={handleChange} required />
                        <button type="submit">ADD ACTIVITY</button>
                    </form>
                </div>
            </div>
        </main>
    );
}