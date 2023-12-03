import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AppContextProvider } from "./context/AppContext";
import "./index.css";
import { Login } from "./pages/Login";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <ProtectedRoute>
        <MovieDetailsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
