import { useOutletContext, useParams } from "react-router-dom";

export default function Summary() {
  const { summaries } = useOutletContext();
  const { summaryId } = useParams();
  const summary = summaries.find((_summary) => _summary.id === +summaryId);
  return (
    <div>
      <h1>Name: {summary.name} </h1>
      <h1>Id: {summary.id}</h1>
    </div>
  );
}
