import "./Botao.css"
import { useContext, useState, useEffect } from "react";
import authContext from "../../context/authContext";
import { ThemeContext } from "../../context/ThemeContext";




export default function Botao(){
    const context = useContext(ThemeContext)
    const Botaoisview = JSON.parse(localStorage.getItem("Dados")) ? "initial" : "none";
    return(
        <div class="botaoabsolut" style={{ display: Botaoisview }}>

                <div class="Wrapbotao">
                    <p>Modo noturno: </p>
                    <label class="switch">
                        <input type="checkbox" onClick={context.toggleThemeMode}/>
                        <span class="slider round"></span>
                    </label>
                </div>


        </div>
    )


}