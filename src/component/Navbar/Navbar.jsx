import "./Navbar.css"

const Navbar = () => {
  return (
<nav className='navbar-container'>
  <a href="/" id="logo" className="animated-underline">
  <img src="./logo.png" alt="" />
  <span id="nav-title">Beyond</span> </a> 
  <div id="right-nav">
    <h3>Hello! Yash</h3>
    <button className="animated-underline">Logout</button>
  </div>
</nav>
    )
}

export default Navbar