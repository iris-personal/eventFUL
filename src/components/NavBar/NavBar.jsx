import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to='/calendar'>Calendar</Link>
      &nbsp; | &nbsp;
      Welcome, {user.name}
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}