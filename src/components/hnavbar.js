import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Please consider https://github.com/rsuite/rsuite
import './components.css';
const Hnavbar = (props) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className="hnavbar is-primary" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className={`hnavbar-menu`}>
                    <div className="navbar-start">
                        {props.items.map((item) => <><NavLink className="hnavbar-item" activeClassName="is-active" to={item.link}>
                            {item.text}
                        </NavLink><br /></>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Hnavbar;
/*
 {props.items.map((item) => <><NavLink className="hnavbar-item" activeClassName="is-active" to={item.link}>
                            {item.text}
                        </NavLink><br/></>
 */
/*
 {props.items.map((item) => <><a className="hnavbar-item" href={item.link}>
                            {item.text}
 */