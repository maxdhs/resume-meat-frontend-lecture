import { useOutletContext, useParams } from "react-router-dom";
import NewSummary from "./NewSummary";
import { API } from "../lib";

export default function Project() {
  const { summaries, token, fetchSummaries, user } = useOutletContext();
  const { projectName } = useParams();
  const filteredSummaries = summaries.filter(
    (summary) => summary.projectName === projectName
  );

  async function handleLike(summary) {
    // request to server to create like
    const hasUserLiked = summary.likes.filter((like) => like.userId === user.id)
      .length
      ? true
      : false;
    let res;
    if (hasUserLiked) {
      res = await fetch(`${API}/likes`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likeId: summary.likes[0].id,
        }),
      });
    } else {
      res = await fetch(`${API}/likes`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summaryId: summary.id,
        }),
      });
    }
    const info = await res.json();
    fetchSummaries();
  }

  return (
    <div>
      {filteredSummaries.map((summary) => (
        <div className="summary-container" key={summary.id}>
          <p>{summary.text}</p>
          <p>Author: {summary.user.username}</p>
          <button onClick={() => handleLike(summary)}>
            👍{summary.likes.length}
          </button>
        </div>
      ))}
      <NewSummary />
    </div>
  );
}
