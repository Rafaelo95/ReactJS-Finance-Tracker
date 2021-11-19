import { useReducer, createContext, useEffect } from "react";
import { auth } from "../firebase/config";

// https://reactjs.org/docs/hooks-reference.html
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "login":
        return { ...state, user: action.payload };
      case "logout":
        return { ...state, user: null };
      case "AUTH_IS_READY":
        return { ...state, user: action.payload, authIsReady: true };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {

    // https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#onauthstatechanged

    const unsub = auth.onAuthStateChanged((user) => {
        dispatch({ type: "AUTH_IS_READY", payload: user });
        unsub();
    });
  }, []);

  console.log("AuthContext state", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
