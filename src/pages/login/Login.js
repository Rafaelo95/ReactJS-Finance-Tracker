import "./Login.css";

export default function Login() {
  return (
    <form className="login-form">
      <h3 className="login-form-title">Login</h3>
      <label>Email:</label>
      <input type="text"></input>

      <label>Password:</label>
      <input type="password"></input>

      <button>Log in</button>
    </form>
  );
}
