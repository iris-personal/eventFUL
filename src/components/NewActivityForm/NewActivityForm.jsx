import { useState } from "react";


export default function NewActivityForm({ addActivity }) {
    const [newActivity, setNewActivity] = useState({
        date: "",
        time: "",
        name: ""
    })

    handleSubmit = (evt) => {
        evt.preventDefault();
        addActivity(newActivity);
        setNewActivity({
            date: "",
            time: "",
            name: ""
        });
    }

    handleChange = (evt) => {
        setNewActivity({ ...newActivity, [evt.target.name]: evt.target.value });
    }

    return (
        <>
        <h1>Add Activity</h1>
        <form onSubmit = {handleSubmit}>
            <input 
            onChange = {handleChange}
            value = {newActivity.date}
            type = "Date"
            ></input>
            <input 
            onChange = {handleChange}
            value = {newActivity.time}
            type = "String"
            ></input>
            <input 
            onChange = {handleChange}
            value = {newActivity.name}
            type = "String"
            ></input>
        </form>
        </>
    );

}