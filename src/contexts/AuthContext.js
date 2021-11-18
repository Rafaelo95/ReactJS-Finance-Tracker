import { useReducer, createContext } from "react";

// https://reactjs.org/docs/hooks-reference.html
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "login":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };

  let currentUser = {
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, currentUser);

  console.log("AuthContext state", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};