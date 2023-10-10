import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./routes/App.tsx";
import ErrorPage from "./routes/Error.tsx";
import Home from "./routes/Home.tsx";
import Register from "./routes/Register.tsx";
import Login from "./routes/Login.tsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: "/app",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: "/register",
        element: <Register></Register>,
        errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: "/login",
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
