import "./Sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { BiUserCircle } from "react-icons/bi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { BsWallet2 } from "react-icons/bs";
import { TbBrandDiscord } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { useContext, useState } from "react";
import authContext from "../../context/authContext";

export default function Sidebar() {
  const [selected, setSelectedState] = useState(true);
  const AuthContext = useContext(authContext);

  const className = selected ? "menu" : "menufechado";
  const sideBarIsView = JSON.parse(localStorage.getItem("Dados")) ? "initial" : "none";

  console.log(localStorage.getItem("Dados") === false);

  console.log(sideBarIsView);

  return (
    <div style={{ display: sideBarIsView }}>
      <div>
        <GiHamburgerMenu
          onClick={() => {
            if (selected === true) {
              setSelectedState(false);
            } else {
              setSelectedState(true);
            }
          }}
          className={selected ? "Git" : "Gitfechado"}
        />
      </div>
      <div className={className}>
        <ul>
          <li className="Icones">
            <NavLink to="/Menu">
              {" "}
              <SlHome />{" "}
            </NavLink>
          </li>
          <li className="Icones">
            <NavLink to="/Perfil">
              {" "}
              <BiUserCircle />{" "}
            </NavLink>
          </li>
          <li className="Icones">
            <NavLink to="/Games">
              {" "}
              <TbDeviceGamepad2 />{" "}
            </NavLink>
          </li>
          <li className="Icones">
            <NavLink to="/Cursos">
              {" "}
              <FiMonitor />
            </NavLink>{" "}
          </li>
          <li className="Icones">
            <NavLink to="/Carteira">
              {" "}
              <BsWallet2 />
            </NavLink>{" "}
          </li>
          <li className="Icones">
            <a
              href="https://discord.com/channels/1011719454243172352/1011719454243172356/1042174027478868090"
              target="_blank"
            >
              {" "}
              <TbBrandDiscord />
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
