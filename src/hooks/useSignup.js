import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const useSignup = () => {
    const { dispatch: userDispatch } = useContext(UserContext)

    const signup = async (email, password) => {

        const response = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        if (!response.ok) {
            console.log('error signing up')
        }
        if (response.ok) {
            //store token in localstorage to prevent loss in refreshes
            localStorage.setItem('user', JSON.stringify(json))
            //dispatch user, register token
            userDispatch({ type: 'LOGIN', payload: json })
        }
    }

    return {signup}

}
