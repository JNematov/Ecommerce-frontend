import { useReducer } from "react";
import { createContext } from "react";

export const ItemsContext = createContext()

const ItemsContextProvider = ({children}) => {

    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type){
            case 'GET_ITEMS':
                return {items:action.payload};
            case 'CREATE_ITEM':
                return {items: [...state.items, action.payload ]};
            case 'DELETE_ITEM': 
                return {items: state.items.filter(item => (item !== action.payload._id))}
        }
    })

    return (
        <ItemsContext.Provider value={{...state, dispatch}}>
            {children}
        </ItemsContext.Provider>
     );
}
 
export default ItemsContextProvider;