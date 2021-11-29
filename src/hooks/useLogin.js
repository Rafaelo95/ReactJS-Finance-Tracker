import { useState, useContext, useEffect } from "react";
import { auth } from "../firebase/config";
import { AuthContext } from "../contexts/AuthContext";
import { signInWithEmailAndPassword } from "@firebase/auth";

// const simulateSlowNetworkRequest = () =>
//   new Promise(resolve => setTimeout(resolve, 2500));

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    setIsPending(true);
    setError(false);

    try {

      // https://firebase.google.com/docs/reference/js/auth.md#signinwithemailandpassword
      const response = await signInWithEmailAndPassword(auth, email, password);

      // console.log(response);
      if (!response) {
        throw new Error("Could not log in");
      }

      dispatch({ type: "login", payload: response.user });

      setIsPending(false);

    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  useEffect(() => {
    return () => {}
  }, [])

  return { error, isPending, login };
};
