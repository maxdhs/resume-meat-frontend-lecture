import { Link, useOutletContext } from "react-router-dom";

export default function Projects() {
  const { projects } = useOutletContext();
  return (
    <div>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
