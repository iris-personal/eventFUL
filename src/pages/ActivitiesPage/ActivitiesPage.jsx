// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ActivitiesPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function ActivitiesPage({ user, setUser }) {

  return (
    <main className="ActivitiesPage">
      <aside>
        <Logo />
        <Link to="" className="button btn-sm">NEW ACTIVITY</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      {/* Render an Day or CalendarDate component (needs to be coded) */}
      {/* Render the existing OrderDetail component */}

    </main>
  );
}