import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header>
        <nav className="sidebar">
          <ul>
            <li>
              <a href="/events">Home</a>
            </li>
            <li>
              <Link to="/events">Games</Link>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="main">{/* Your main content goes here */}</div>
    </div>
  );
}
