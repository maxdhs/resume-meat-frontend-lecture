import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { API } from "./lib";

export default function App() {
  const [summaries, setSummaries] = useState([
    {
      id: 1,
      projectName: "spammer",
      text: "Spammer was a fullstack application with React on the front end and Express, Node, and Prisma on the backend.",
    },
    {
      id: 2,
      projectName: "milkman",
      text: "Milkman is a game built with react, requiring extensive use of timers.",
    },
    {
      id: 3,
      projectName: "hungryPets",
      text: "hungry pets is a game built with react to keep pets alive using many event handlers in react",
    },
  ]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  async function fetchUser() {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
    if (!token) {
      return;
    }
    const res = await fetch(`${API}/users/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    if (info.success) {
      setUser(info.user);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [token]);
  return (
    <div>
      <Navbar user={user} setToken={setToken} setUser={setUser} />
      <Outlet context={{ summaries, setToken }} />
    </div>
  );
}
