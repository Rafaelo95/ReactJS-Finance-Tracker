import { useState } from "react"

// styles
import "./Login.css";

export default function Login() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h3 className="login-form-title">Login</h3>
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

      <button>Log in</button>
    </form>
  );
}
