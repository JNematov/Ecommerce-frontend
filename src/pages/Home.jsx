import { useEffect } from "react";
import { useContext } from "react";
import ItemDetails from "../components/ItemDetails";
import { ItemsContext } from "../context/ItemsContext";

const Home = () => {

    const {items, dispatch : dispatchItems} = useContext(ItemsContext)

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('http://localhost:8000/items/')
            const json = await response.json()
            if(response.ok){
                console.log(json)
                dispatchItems({type: 'GET_ITEMS', payload: json})
            }else{
                console.log('error fetching')
            }
        }
        fetchItems();
    }, [])

    return ( 
        <div className="Home">
            {items && items.map(item => (<ItemDetails item={item}/>))}
        </div>
     );
}
 
export default Home;