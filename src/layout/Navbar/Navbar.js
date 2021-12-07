import React from 'react'
import './Navbar.scss'
function Navbar() {
    return (
        <div id = "navbar" className="container">
            <div className="navbar-list">
                <div className="navbar-logo">
                    <img src="/assets/logo_mainstack.svg" alt="" />
                </div>
                <ul>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="navbar-btns">
                <button className="btn-signin">Sign In</button>
                <button className="btn-signup">Create Free Account</button>
            </div>
        </div>
    )
}

export default Navbar
