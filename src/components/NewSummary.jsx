import { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { API } from "../lib";

export default function NewSummary() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const { token, fetchSummaries } = useOutletContext();

  const { projectName } = useParams();

  async function handleSubmit(e) {
    setError("");
    e.preventDefault();
    const res = await fetch(`${API}/summaries`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, projectName }),
    });
    const info = await res.json();
    if (!info.success) {
      return setError(info.error);
    }
    setText("");
    fetchSummaries();
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter New Summary.."
      />
      <button>Submit Summary</button>
      <p>{error}</p>
    </form>
  );
}
