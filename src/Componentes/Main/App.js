import Sidebar from "../Sidebar/Sidebar";
import Perfil from "../Perfil/Perfil";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Carteira from "../Carteira/Carteira";
import LoginPage from "../loginPage/LoginPage";
import { useState } from "react";
import authContext from "../../context/authContext";
import { AuthProvider } from "../../context";
import Signin from "../SingninPage/Singnin";
import GamePage from "../GamePage/GamePage";
import MenuInicial from "../MenuInicial/MenuInicial";
import Cursos from "../Cursos/Cursos";
import VLibras from "@djpfs/react-vlibras";
import Acessibilidade from "../Acessibilidade/Acessibilidade";

export default function App() {
  const [loged, setLoged] = useState(false);

  return (

    <AuthProvider>
      <Router>
        
        <authContext.Provider value={{ loged, setLoged }}>
          <Sidebar />
            <Routes>
              <Route element={<LoginPage/>} path="/" exact />
              <Route
                path="/perfil"
                element={
                  <Perfil
                    rank="Veterano"
                    qtCursos="10"
                    recorde="400"
                    nivel="5"
                    escola="teste"
                    nome="teste"
                    linkImg="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  />
                }
              />
              <Route path="/carteira" element={<Carteira coins="15" />} />
              <Route path="/register" element={<Signin/>}/>
              <Route path="/games" element={<GamePage/>} />
              <Route path="/Menu" element={<MenuInicial/>}/>
              <Route path="/Cursos" element={<Cursos/>}/>
              
            </Routes>
            <Acessibilidade/>
            <VLibras forceOnload={true}/>
        </authContext.Provider>
        
      </Router>

      </AuthProvider>
  );
}
