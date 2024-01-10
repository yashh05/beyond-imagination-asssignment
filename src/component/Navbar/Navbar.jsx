import { useContext } from "react"
import "./Navbar.css"
import userContext from "../../context/userContext"
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const a=useContext(userContext)
  const navigate=useNavigate()

function handleLogout(){
  a.logout();
  navigate("/login")
}

  return (
<nav className='navbar-container'>
  <a href="/" id="logo" className="animated-underline">
  <img src="./logo.png" alt="" />
  <span id="nav-title">Beyond</span> </a> 
  <div id="right-nav">
    <h3>Hello! {a.state.username}</h3>
    <button className="animated-underline" onClick={handleLogout}>Logout</button>
  </div>
</nav>
    )
}

export default Navbar