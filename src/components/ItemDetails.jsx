import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const ItemDetails = ({ item }) => {

    const {dispatch} = useContext(ItemsContext)

    const deleteItem = (e) => {
        console.log(item)
        dispatch({type:'DELETE_ITEM', payload: item})
    }

    return (
        <div className="itemDetails">
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <Button variant="outlined" onClick={deleteItem} startIcon={<DeleteIcon />}>Delete</Button>
        </div>
    );
}

export default ItemDetails;