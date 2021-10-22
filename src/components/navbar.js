import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Please consider https://github.com/rsuite/rsuite
import './components.css';
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className="classNavbar is-primary" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start">
                        <NavLink className="navbar-item-first" activeClassName="is-active" to="/home">
                            <img src="gagentlogo.png" alt="Home" className="classNavwinImage" style={{ width: "10%"}} />
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/getstarted">
                            Get Started
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/apiref">
                            API Reference
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/devguide">
                            Developer Guide
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/dataint">
                            Data Integrity
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/rnotes">
                            Release Notes
                        </NavLink>
                        <NavLink className="navbar-item" activeClassName="is-active" to="/license">
                            License
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

