const ItemDetails = ({item}) => {
    return ( 
        <div className="itemDetails">
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
        </div>
     );
}
 
export default ItemDetails;