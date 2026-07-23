import { NavLink } from "react-router-dom";

function Navbar({ isDarkMode, setIsDarkMode }) {
  return (
    <nav className="top-nav">
      <div className="brand">Smit Goyani</div>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Contact
        </NavLink>
      </div>

      <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;