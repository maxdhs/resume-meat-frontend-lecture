import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link to={"/"}>Resume 🍖</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </div>
  );
}
