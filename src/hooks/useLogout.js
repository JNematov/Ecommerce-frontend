import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { UserContext } from "../context/UserContext"

export const useLogout = () => {
    const { dispatch: dispatchUser} = useContext(UserContext)
    const {dispatch : dispatchCart} = useContext(CartContext)
    
    const logout = () => {
        localStorage.removeItem('user') //remove user json from local storage
        dispatchCart({type : ''})
        dispatchUser({type: 'LOGOUT'})
    }

    return {logout}
}