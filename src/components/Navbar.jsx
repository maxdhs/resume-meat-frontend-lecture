import { Link, NavLink } from "react-router-dom";

export default function Navbar({ user, setToken, setUser }) {
  function handleLogout() {
    setToken("");
    setUser({});
    localStorage.removeItem("token");
  }

  return (
    <div className="navbar-container">
      {!user.id ? (
        <>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
        </>
      ) : (
        <>
          <NavLink to={"/projects/wikipedia"}>Wikipedia</NavLink>
          <NavLink to={"/projects/numberguesser"}>Number Guesser</NavLink>
          <NavLink to={"/projects/milkman"}>Milkman</NavLink>
          <NavLink to={"/projects/hungrypets"}>Hungry Pets</NavLink>
          <NavLink to={"/projects/spammer"}>Spammer</NavLink>
          <NavLink to={"/projects/reddit"}>Reddit</NavLink>
          <span>Welcome {user.username}</span>
          <NavLink onClick={handleLogout} to={"/"}>
            Logout
          </NavLink>
        </>
      )}
    </div>
  );
}
