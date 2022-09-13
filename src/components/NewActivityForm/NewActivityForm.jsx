import { Link } from 'react-router-dom';
import { useState } from "react";
import Logo from "../Logo/Logo";
import UserLogOut from "../UserLogOut/UserLogOut";
import CalendarPage from "../CalendarPage/CalendarPage";


export default function NewActivityForm({ addActivity, day, setSelectedDay, user, setUser }) {
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
            <CalendarPage day={day} setSelectedDay={setSelectedDay} /> 
            <h1>Add Activity</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleChange}
                type="Date"
                defaultValue={day}
                ></input>
                <input 
                onChange={handleChange}
                value={newActivity.time}
                type="String"
                ></input>
                <input 
                onChange={handleChange}
                value={newActivity.name}
                type="String"
                ></input>
            </form>
        </main>
    );
}