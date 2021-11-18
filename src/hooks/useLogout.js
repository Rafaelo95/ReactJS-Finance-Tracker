import { useState, useContext } from "react";
import { auth } from "../firebase/config";
import { AuthContext } from "../contexts/AuthContext";

export const useLogout = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const logout = async () => {
    setIsPending(true);
    setError(false);

    try {
      // https://firebase.google.com/docs/reference/js/auth.md#signout
      await auth.signOut();

      dispatch({ type: "logout" });
      setIsPending(false);
    } catch (err) {
      console.log(err.message);
      setError(true);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
};
