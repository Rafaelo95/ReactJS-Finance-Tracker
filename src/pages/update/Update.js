import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext";
import "./Update.css";

// https://firebase.google.com/docs/reference/js/v8/firebase.firestore.DocumentReference#update

function Update() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // console.log(window.location.href);

  const handleSubmit = (e) => {
    e.preventDefault();

    const promises = []
    setLoading(true)
    setError("")

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        navigate("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h3 className="login-form-title">Update Profile</h3>
      <label>New Email:</label>
      <input
        type="email"
        ref={emailRef}
        required
        defaultValue={currentUser.email}
      />

      <label>New Password:</label>
      <input
        type="password"
        ref={passwordRef}
        placeholder="Leave blank to keep the same"
      />

      <label>Repeat Password:</label>
      <input
        type="password"
        ref={passwordConfirmRef}
        placeholder="Leave blank to keep the same"
      />

      <button>Update</button>
    </form>
  );
}

export default Update;
