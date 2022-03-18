import React from 'react'
import "./Navbar.scss"
import {NavLink} from "react-router-dom";
function Navbar() {
    const [visible,setVisible] = React.useState(false);
  return (
      <header className="header">
            <nav className='navbar container'>
                <NavLink className='nav-link' to="/">
                    Icon 
                </NavLink>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" className='nav-item__link'>Home</NavLink>
                    </li>
                    <li className="nav-item" >
                        <div >
                            <NavLink to="/report" className='nav-item__link' >Report</NavLink>
                        {visible && <ul className='dropdown__items'>
                                <li className='dropdown__item'>
                                    <NavLink className="dropdown__item--link" to="">Users</NavLink>
                                </li>
                                <li className='dropdown__item'>
                                    <NavLink className="dropdown__item--link" to="">Users</NavLink>
                                </li>
                                <li className='dropdown__item'>
                                    <NavLink className="dropdown__item--link" to="">Users</NavLink>
                                </li>
                                <li className='dropdown__item'>
                                    <NavLink className="dropdown__item--link" to="">Users</NavLink>
                                </li>
                            </ul>}
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/products"  className='nav-item__link'>Products</NavLink>
                    </li>
                </ul>
                <button className='nav__btn' onClick={()=>{
                        window.localStorage.removeItem('token');
                        window.location.reload()
                }}>Log out</button>
            </nav>
      </header>
  )
}

export default Navbar
