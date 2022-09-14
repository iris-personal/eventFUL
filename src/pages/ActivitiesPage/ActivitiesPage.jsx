import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ActivitiesPage.css';
import * as activitiesAPI from "../../utilities/activities-api";
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import ActivityList from "../../components/ActivityList/ActivityList";

export default function ActivitiesPage({ user, setUser, activities, setActivities, deleteActivity }) {

  useEffect(function() {
    async function getActivities() {
      const allActivities = await activitiesAPI.getAll();
      setActivities(allActivities);
    }
    getActivities();
  }, []);

  return (
    <main className="ActivitiesPage">
      <aside>
        <Logo />
        <Link to="/activities/new" className="button btn-sm">NEW ACTIVITY</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <ActivityList activities={activities} deleteActivity={deleteActivity} />
    </main>
  );
}