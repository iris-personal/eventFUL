import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as activitiesAPI from "../../utilities/activities-api";
import AuthPage from '../AuthPage/AuthPage';
import EditActivityPage from '../../components/EditActivityPage/EditActivityPage';
import NewActivityForm from '../../components/NewActivityForm/NewActivityForm';
import ActivitiesPage from '../ActivitiesPage/ActivitiesPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [activities, setActivities] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const navigate = useNavigate();

  async function addActivity(activityData) {
    const updatedActivities = await activitiesAPI.addOne(activityData);
    setActivities([...activities, updatedActivities]);
  }

  async function deleteActivity(activityId) {
    await activitiesAPI.deleteActivity(activityId);
    const remainingActivities = activities.filter((activity) => activity._id !== activityId);
    setActivities(remainingActivities);
  }

  async function updateActivity(activityData, activityId) {
    const updatedActivities = await activitiesAPI.updateActivity(activityId, activityData);
    setActivities(updatedActivities);
    navigate('/activities');
  }

  return (
    <main className="App">
      { user ?
        <>
          <Routes>
            {/* Route components in here */}
            <Route path='/activities' element={<ActivitiesPage
            user={user} setUser={setUser} activities={activities} setActivities={setActivities} deleteActivity={deleteActivity} />} />
            <Route path='/activities/:id/edit' element={<EditActivityPage updateActivity={updateActivity} activities={activities} user={user} setUser={setUser} />} />
            <Route path='/activities/new' element={<NewActivityForm day={selectedDay} user={user} setUser={setUser} addActivity={addActivity}/>} />
            <Route path="/*" element={<Navigate to="/activities" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main> 
  );
}
