import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ActivitiesPage.css';
import * as activitiesAPI from "../../utilities/activities-api";
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import NewActivityForm from '../../components/NewActivityForm/NewActivityForm';
import ActivityList from '../../components/ActivityList/ActivityList';

export default function ActivitiesPage({ user, setUser, activity, setActivity, day }) {
  const [activities, setActivities] = useState([])
useEffect(function() {
  async function getActivities() {
    const allActivities = await activitiesAPI.getAll();
    setActivities(allActivities);
  }
  getActivities();
}, []);
async function addActivity(activityData) {
  const updatedActivities = await activitiesAPI.addOne(activityData);
  setActivities([...activities, updatedActivities]);
}
  return (
    <main className="ActivitiesPage">
      <aside>
        <Logo />
        <Link to="" className="button btn-sm">NEW ACTIVITY</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      {/* Render an Day or CalendarDate component (needs to be coded) */}
      <ActivityList day={day} activities={activities} activity={activity} />
      {/* Render AddActivity component */}
      <NewActivityForm day={day} addActivity={addActivity} />
    </main>
  );
}