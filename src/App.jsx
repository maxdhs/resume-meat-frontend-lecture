import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function App() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Spammer" },
    { id: 2, name: "Milkman" },
    { id: 3, name: "Hungry Pets" },
  ]);
  return (
    <div>
      <Navbar />
      <Outlet context={{ projects }} />
    </div>
  );
}
