import React from "react";
import './Header.css';
import logo from './assets/logo.svg';

function Header() {
    return (
        <>
            <nav className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo-image" />
                    <div className="logo-text">GeekFoods</div>
                </div>

                <div className="navLinks">
                    <a href="#">Home</a>
                    <a href="#">Quote</a>
                    <a href="#">Restaurants</a>
                    <a href="#">Foods</a>
                    <a href="#">Contact</a>
                </div>

                <button>Get Started</button>
            </nav>
        </>
    );
}

export default Header;