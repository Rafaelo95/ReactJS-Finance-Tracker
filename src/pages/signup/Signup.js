import { useState } from "react";

// styles
import "./Signup.css";

export default function Signup() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [displayName, setDisplayName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName)
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h3 className="signup-form-title">Sign Up</h3>
      <label>Email:</label>
      <input 
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password:</label>
      <input 
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <label>Display Name:</label>
      <input 
        type="text" 
        onChange={(e) => setDisplayName(e.target.value)}
      />

      <button>Register</button>
    </form>
  );
}
