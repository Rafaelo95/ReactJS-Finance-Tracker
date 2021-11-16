import { useState } from "react"
import { auth } from "../firebase/config"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

export const useSignup = () => {
    let [error, setError] = useState('')
    let [isPending, setIsPending] = useState(false)

    const signup = async (email, password, displayName) => {
        setIsPending(true)

        try {
            
            // refer to https://firebase.google.com/docs/auth/web/manage-users#create_a_user for reference on user creation
            let response = await createUserWithEmailAndPassword(auth, email, password)
            
            console.log(response.user)

            if (!response) {
                throw new Error('Could not sign up')
            }

            // refer to https://firebase.google.com/docs/auth/web/manage-users#web-version-9_4 for reference on updateProfile
            await updateProfile(response.user, { displayName: displayName })

            setIsPending(false)
        } catch (err) {
            console.log(err.message)
            setError(err)
            setIsPending(false)
        }
    }

    return { error, isPending, signup }
}