import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { API } from "./lib";

export default function App() {
  const [summaries, setSummaries] = useState([]);
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

  async function fetchSummaries() {
    const res = await fetch(`${API}/summaries`);
    const info = await res.json();
    if (info.success) {
      setSummaries(info.summaries);
    }
  }

  useEffect(() => {
    fetchUser();
    fetchSummaries();
  }, [token]);
  return (
    <div>
      <Navbar user={user} setToken={setToken} setUser={setUser} />
      <Outlet context={{ summaries, setToken, token, fetchSummaries, user }} />
    </div>
  );
}
