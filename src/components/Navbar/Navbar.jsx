import React, { useState } from 'react' 
import './Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';


    const Navbar = () => {

        const [menu,setMenu] = useState("home");
    
    return (
        <div    className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt=""/>
                </div>
                <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link to ='/' style={{ textDecoration: 'none' }}>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link to ='/about' style={{ textDecoration: 'none' }}>About</Link>{menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("blog")}}><Link to ='/blog' style={{ textDecoration: 'none' }}>Blog</Link>{menu==="blog"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact")}}><Link to ='/contact' style={{ textDecoration: 'none' }}>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login">
                <Link to='/login'><button>Login</button></Link>
            </div>
        </div>
    ) 
}

export default Navbar