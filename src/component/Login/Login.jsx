import "./Login.css"

const Login = () => {
  return (
    <div className="form-container">
        <form className="login-form">
          <h1>Login</h1>
            <input type="text" placeholder="Username" autoFocus />
            <input type="password" placeholder="Password" />
            <button type="submit">Login now</button>
        </form>
    </div>
  )
}

export default Login