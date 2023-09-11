import { useOutletContext, useParams } from "react-router-dom";

export default function Project() {
  const { projects } = useOutletContext();
  const { projectId } = useParams();
  const project = projects.find((_project) => _project.id === +projectId);
  return (
    <div>
      <h1>Name: {project.name} </h1>
      <h1>Id: {project.id}</h1>
    </div>
  );
}
