import React,{createContext, useEffect, useState} from "react";

import { getUserLocalStorage, LoginRequest, setUserLocalStorage, SignupRequest } from "./Util";



export const authContext = createContext();


export const AuthProvider = ({ children}) =>{
    
    const [user, setUser] = useState(getUserLocalStorage())

    useEffect(() =>{ 
        const user = getUserLocalStorage();

        if(user){
            setUser(user)
        }
    }, [])

    function authenticate(email, password) {
        const response = LoginRequest(email, password).then((r) =>{
            console.log(r.data);
            const payload = r.data;
            setUser(payload);
            setUserLocalStorage(payload)
        })

        return response;
    }

    function signup(email, password){
        const resposta = SignupRequest(email, password).then((respo) =>{
            console.log(respo.data);
            const Cadastrar = respo.data;
            setUser(Cadastrar);
            setUserLocalStorage(Cadastrar)
            
        })

        return resposta;
    }

    function logout (){
        setUser(null);
    }

    return(
        <authContext.Provider value={{...user, authenticate, logout, signup}}>
            {children}
        </authContext.Provider>
    )
}