import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import CalendarPage from '../CalendarPage/CalendarPage';
import ActivitiesPage from '../ActivitiesPage/ActivitiesPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [activity, setActivity] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <main className="App">
      { user ?
        <>
          <Routes>
            {/* Route components in here */}
            <Route path='/calendar' element={<CalendarPage day={selectedDay} setSelectedDay={setSelectedDay} />} />
            <Route path='/activities' element={<ActivitiesPage day={selectedDay} activity={activity} setActivity={setActivity} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
