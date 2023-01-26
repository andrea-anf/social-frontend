import "../styles/header.css";
import  React, { useState } from 'react'
import { Link } from "react-router-dom";

function Header() {

    const [clicked, setClicked]= useState(false)

    const handleClick = () => {
        console.log("CLICKED: " + clicked)
        setClicked(!clicked)
    }

    return (
        <header className="header-container">

        <nav>
            <div className="logo">
                <h1>SchoolNotes</h1>
                <h3>Share your knowledge</h3>
            </div>

            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>    
            </div>

            <div className={clicked ? "nav-button-list active" : "nav-button-list"}>
                <Link to="/" className="button">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <label className="icon-label">Home</label>
                </Link>
                <Link to="/themes"  className="button">
                    <i className="fa fa-book" aria-hidden="true"></i>
                    <label className="icon-label">Themes</label>
                </Link>
                <Link to="/about"  className="button">
                    <i className="fa-solid fa-building"></i>
                    <label className="icon-label">About us</label>
                </Link>

                <Link to="/signup"  className="button">
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <label className="icon-label">Signup</label>
                </Link>
                <Link to="/login"  className="button-reversed">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <label className="icon-label">Login</label>
                </Link>
            </div>
        </nav>
      </header>
    )

}

export default Header