import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ActivitiesPage.css';
import * as activitiesAPI from "../../utilities/activities-api";
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import CalendarPage from '../../components/CalendarPage/CalendarPage'
import ActivityList from '../../components/ActivityList/ActivityList';

export default function ActivitiesPage({ user, setUser, activity, day, setSelectedDay, activities, setActivities }) {

  useEffect(function() {
    async function getActivities() {
      const allActivities = await activitiesAPI.getAll();
      setActivities(allActivities);
    }
    getActivities();
  }, []);

  console.log(activities)
  return (
    <main className="ActivitiesPage">
      <aside>
        <Logo />
        <Link to="/activities/new" className="button btn-sm">NEW ACTIVITY</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <CalendarPage day={day} setSelectedDay={setSelectedDay} />
      <ActivityList day={day} activities={activities} activity={activity} />
    </main>
  );
}