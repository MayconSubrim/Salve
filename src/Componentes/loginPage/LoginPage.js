import "./LoginPage.css";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import authContext from "../../context/authContext";
import { useAuth } from "../../context/useAuth";
import { MdAirlineSeatLegroomReduced, MdOutlineVpnKey } from "react-icons/md"

export default function LoginPage() {
  const navigate = useNavigate();
  const AuthContex = useContext(authContext);



  useEffect(() => {
    if (localStorage.getItem("Dados")) {
    }
  }, []);

  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  console.log(auth)

  function onFinish(e) {
    e.preventDefault();

    auth
      .authenticate(email, password)
      .then(() => {
        AuthContex.setLoged(true);
        localStorage.setItem("Dados", true)
        navigate("/Menu");
        
      })
      .catch(() => {
        alert("Usuario ou senha inválidos!");
      })}

      

  return (
    <main>
      <div className="imagemzada">
        <p>Transforme seu futuro e se divirta aprendendo!</p>
        <img src="/images/Loginimage.png"></img>
      </div>
      <div className="LoginArea">
        <img className="LogoSalve" src="/images/logo-removebg-preview.png"></img>
        <div className="inputs">
            
            <form onSubmit={onFinish}>
              <input className="singin" placeholder="e-mail"
              onChange={(e) => setEmail(e.target.value)}
              
              >
              
              </input>
              <input className="singin" placeholder="Senha" type="password"
              onChange={(e) => setPassword(e.target.value)}
              >
              
              </input>
            

            <button className="entrar"> entrar </button>
            </form>
          <p onClick={()=>navigate("/register")}>Cadastrar</p>
        </div>
      </div>
    </main>
  );
}
