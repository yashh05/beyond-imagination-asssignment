import "./Navbar.css"

const Navbar = () => {
  return (
<nav className='navbar-container'>
 <a href="/" className="animated-underline"><h1 id="nav-title">Beyond Charts</h1> </a> 
  <div id="right-nav">
    <h3>Hello! Yash</h3>
    <button className="animated-underline">Logout</button>
  </div>
</nav>
    )
}

export default Navbar