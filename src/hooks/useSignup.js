import { useState, useContext } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";

export const useSignup = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const signup = async (email, password, displayName) => {
    setError(false);
    setIsPending(true);

    try {
      // refer to https://firebase.google.com/docs/auth/web/manage-users#create_a_user for reference on user creation
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(response.user);

      if (!response) {
        throw new Error("Could not sign up");
      }

      // refer to https://firebase.google.com/docs/auth/web/manage-users#web-version-9_4 for reference on updateProfile
      await updateProfile(response.user, { displayName: displayName });

      dispatch({ type: "login", payload: response.user });

      setIsPending(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
