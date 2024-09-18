import React from "react"
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'

export default function Navbar() {
    return (
        <header className="header">
            <div>
                <h2 className="header--logo">
                    <img src={logo} alt="" className="header--logo--img"/>
                    FlashCards</h2>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/discover">Discover</Link>
                    </li>
                </ul>
            </nav>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/login">
                            <i className="fa-solid fa-right-to-bracket login"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}