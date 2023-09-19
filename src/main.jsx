import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Projects from "./components/Projects.jsx";
import Project from "./components/Project.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:projectName", element: <Project /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
