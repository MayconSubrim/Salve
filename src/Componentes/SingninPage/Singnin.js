import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState, } from "react"
import { useAuth } from "../../context/useAuth";
import "./Singnin.css"


export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [textError, setTextError] = useState("");


    const navigate = useNavigate();
    const auth = useAuth();

    console.log(auth)

    function submit(e) {
    e.preventDefault();

    if (error) return;

    auth
    .signup(email, password)
    .then(() => {
        alert("Usuario Cadastrado com sucesso")
        navigate("/");
    })

    }

    return(


        <main>
        <div className="imagemzada">
          <p>Transforme seu futuro e se divirta aprendendo!</p>
          <img src="./images/Loginimage.png"></img>
        </div>
        <div className="LoginArea">
          <div className="inputs">
              
              <form onSubmit={submit}>
                <input  onChange={(e) => setEmail(e.target.value)} className="singin" placeholder="e-mail">
                
                </input>
                <input onChange={(e) => {
            setPassword(e.target.value);
            if (e.target.value != confirmPassword) {
              setError(true);
              setTextError("Senhas diferentes");
            }
            if (e.target.value === confirmPassword) setError(false);
          }} className="singin" placeholder="Senha">
                
                </input>
                <input onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (password != e.target.value) {
              setError(true);
              setTextError("*Senhas diferentes*");
            }
            if (password === e.target.value) setError(false);
          }} className="singin" placeholder="Confirmar Senha">
                </input>
              
  
              <button className="entrar"> Cadastrar </button>
              </form>
            {error ? <p className="error">{textError}</p> : ""}
            <p onClick={() => navigate("/")}>Já possuo uma conta</p>
          </div>
        </div>
      </main>

    )

}