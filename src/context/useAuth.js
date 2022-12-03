import { useContext } from "react"
import { authContext } from "."

export const useAuth = () => {
    const context = useContext(authContext);

    return context;
}