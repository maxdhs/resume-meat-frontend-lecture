import { useOutletContext, useParams } from "react-router-dom";
import NewSummary from "./NewSummary";

export default function Project() {
  const { summaries } = useOutletContext();
  const { projectName } = useParams();
  const filteredSummaries = summaries.filter(
    (summary) => summary.projectName === projectName
  );
  return (
    <div>
      {filteredSummaries.map((summary) => (
        <div className="summary-container" key={summary.id}>
          <p>{summary.text}</p>
          <p>Author: {summary.user.username}</p>
          <p>Likes: </p>
        </div>
      ))}
      <NewSummary />
    </div>
  );
}
