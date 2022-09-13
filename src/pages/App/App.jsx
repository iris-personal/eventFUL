import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as activitiesAPI from "../../utilities/activities-api";
import AuthPage from '../AuthPage/AuthPage';
import NewActivityForm from '../../components/NewActivityForm/NewActivityForm';
import ActivitiesPage from '../ActivitiesPage/ActivitiesPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [activity, setActivity] = useState([]);
  const [activities, setActivities] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  async function addActivity(activityData) {
    const updatedActivities = await activitiesAPI.addOne(activityData);
    setActivities([...activities, updatedActivities]);
  }

  return (
    <main className="App">
      { user ?
        <>
          <Routes>
            {/* Route components in here */}
            <Route path='/activities' element={<ActivitiesPage day={selectedDay} setSelectedDay={setSelectedDay} activity={activity} setActivity={setActivity} user={user} setUser={setUser} activities={activities} setActivities={setActivities}/>} />
            <Route path='/activities/new' element={<NewActivityForm day={selectedDay} activity={activity} setActivity={setActivity} user={user} setUser={setUser} addActivity={addActivity}/>} />
            <Route path="/*" element={<Navigate to="/activities" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main> 
  );
}
