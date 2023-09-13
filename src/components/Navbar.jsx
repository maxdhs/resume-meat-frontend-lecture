import { Link } from "react-router-dom";

export default function Navbar({ user, setToken, setUser }) {
  function handleLogout() {
    setToken("");
    setUser({});
    localStorage.removeItem("token");
  }

  return (
    <div className="navbar-container">
      <Link to={"/"}>Resume 🍖</Link>
      <Link to={"/projects"}>Projects</Link>

      {!user.id ? (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </>
      ) : (
        <>
          <span>Welcome {user.username}</span>
          <Link onClick={handleLogout} to={"/"}>
            Logout
          </Link>
        </>
      )}
    </div>
  );
}
