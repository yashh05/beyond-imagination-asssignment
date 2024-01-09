import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
       <a href="/">Dashboard</a>
       <a href="/">Profile</a>
    </div>
  )
}

export default Sidebar