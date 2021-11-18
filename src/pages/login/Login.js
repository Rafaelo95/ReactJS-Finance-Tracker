import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

// styles
import "./Login.css";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h3 className="login-form-title">Login</h3>
      <label>Email:</label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />

      {!isPending && <button>Log in</button>}
      {isPending && <button disabled>Loading...</button>}
      {error && <p>{error}</p>}
    </form>
      
    
  );
}
