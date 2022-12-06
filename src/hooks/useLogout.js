import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const useLogout = () => {
    const { dispatch: dispatchUser} = useContext(UserContext)
    
    const logout = () => {
        localStorage.removeItem('user') //remove user json from local storage
        dispatchUser({type: 'LOGOUT'})
    }

    return {logout}
}