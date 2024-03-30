import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";

import Contact from "./component/Contact/Contact.jsx";
import Awards from "./component/Awards/Awards.jsx";
import Certificates from "./component/Certificates/Certificates.jsx";
import Header from "./component/Header/Header.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/Awards", element: <Awards /> },
  { path: "/Certificates", element: <Certificates /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
