import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <Link to={"/projects/milkman"}>Milkman</Link>
      <Link to={"/projects/spammer"}>Spammer</Link>
      <Link to={"/projects/wikipedia"}>Wikipedia</Link>
    </div>
  );
}
