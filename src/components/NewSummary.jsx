import { useState } from "react";

export default function NewSummary() {
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter New Summary.."
      />
      <button>Submit Summary</button>
    </form>
  );
}
