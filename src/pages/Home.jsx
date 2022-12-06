import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import ItemDetails from "../components/ItemDetails";
import { ItemsContext } from "../context/ItemsContext";
import { UserContext } from "../context/UserContext";
import { useLogout } from "../hooks/useLogout";

const Home = () => {
    
    const {user} = useContext(UserContext);
    const {logout} = useLogout();
    const {items, dispatch : dispatchItems} = useContext(ItemsContext)

    const handleLogout = () => {
        console.log(user)
        logout()
    }

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('http://localhost:8000/items/', {
                headers: {
                    "Authentication": `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if(response.ok){
                console.log(json)
                dispatchItems({type: 'GET_ITEMS', payload: json})
            }else{
                console.log('error fetching')
            }
        }
        if(user){
            fetchItems();
        } 
    }, [dispatchItems, user])

    return ( 
        <div className="Home">
            <Button onClick={handleLogout}>Logout</Button>
            <div>{items && items.map(item => (<ItemDetails item={item}/>))}</div>
        </div>
     );
}
 
export default Home;