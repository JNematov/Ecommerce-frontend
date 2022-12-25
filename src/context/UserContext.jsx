import { useEffect, useReducer } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "LOGIN":
          return { user: action.payload };
        case "LOGOUT":
          return { user: null };
        default:
          return state;
      }
    },
    { user: null }
  );

  //to get user from localstorage every time page is loaded
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); //{email, token}
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
