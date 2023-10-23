import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Users from "./pages/Users";
import Inventory from "./pages/Inventory";
import Settings from "./pages/Settings";
import Layout from "./Components/Layout";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/history", element: <History /> },
  { path: "/users", element: <Users /> },
  { path: "/inventory", element: <Inventory /> },
  { path: "/settings", element: <Settings /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
    <RouterProvider router={router} fallbackElement={<p>Loading....</p>} />
  </>
);
