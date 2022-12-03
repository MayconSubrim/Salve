import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./Componentes/loginPage/LoginPage";
import App from "./Componentes/Main/App";
import Sidebar from "./Componentes/Sidebar/Sidebar";
import Signin from "./Componentes/SingninPage/Singnin";
import { AuthProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <main>
        <App/>
    </main>
  </React.StrictMode>
);

// window.onbeforeunload = function () {
//   localStorage.clear();

//   return "";
// };
