import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ActivitiesPage.css';
import * as activitiesAPI from "../../utilities/activities-api";
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function ActivitiesPage({ user, setUser, activity, setActivity }) {
useEffect(function() {
  async function getActivities() {
    const allActivities = await activitiesAPI.getAll();
    setActivity(allActivities);
  }
  getActivities();
}, []);
  return (
    <main className="ActivitiesPage">
      <aside>
        <Logo />
        <Link to="" className="button btn-sm">NEW ACTIVITY</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      {/* Render an Day or CalendarDate component (needs to be coded) */}
      {/* Render AddActivity component */}

    </main>
  );
}