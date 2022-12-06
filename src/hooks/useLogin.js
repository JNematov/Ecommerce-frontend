import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const useLogin = () => {
    const {user,  dispatch: dispatchUser } = useContext(UserContext)

    const login = async (email, password) => {
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        if (!response.ok) {
            //setError, isLoading
            console.log('error')
        } else {
            //register token in localStorage
            localStorage.setItem('user', JSON.stringify(json))
            //dispatch user
            dispatchUser({ type: 'LOGIN', payload: json })
            console.log(user[0])
        }
    }

    return { login }
}