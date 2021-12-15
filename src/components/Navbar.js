import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

// styles
import "./Navbar.css";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li className="nav-title">
          <Link to="/">Finance Tracker</Link>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <p className="welcome-msg">{`Welcome ${user.displayName}!`}</p>
            <li>
                <Link to="/update-profile" className="update-profile">Update Profile</Link>
            </li>
            <li>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
