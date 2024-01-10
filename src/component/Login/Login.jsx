import { useContext, useState } from "react";
import "./Login.css";
import userContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const a = useContext(userContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    console.log(username, password);
    if (!username || !password) {
      alert("enter all details");
    } else {
      a.login(username, password);
      navigate("/");
    }
  }

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login now</button>
      </form>
    </div>
  );
};

export default Login;
