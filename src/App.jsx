import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { API } from "./lib";

export default function App() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Spammer" },
    { id: 2, name: "Milkman" },
    { id: 3, name: "Hungry Pets" },
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
      <Navbar />
      <Outlet context={{ projects, setToken }} />
    </div>
  );
}
