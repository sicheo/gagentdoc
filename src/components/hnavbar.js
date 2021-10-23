import React, { useState} from "react";
import { NavLink } from "react-router-dom";
// Please consider https://github.com/rsuite/rsuite
import './components.css';
const Hnavbar = (props) => {
    const [markdown, setMarkdown] = useState("")
    let md = ""

    const loadMarkdown = ((name) => {
        // HERE AJAX CALL TO GET MARKDOWNS
        md = "## Markdown  \n" + name
        setMarkdown(md);
        props.callback(md)
    })

    const execMarkdown = function (e, mdn) {
        e.preventDefault()
        setTimeout(() => loadMarkdown(mdn
            ), 1000);
    };

    return (
        <nav className="hnavbar is-primary" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className={`hnavbar-menu`}>
                    <div className="navbar-start">
                        {props.items.map((item) => item.type == 'link'?<><a className="hnavbar-item" href={item.link} onClick={e => execMarkdown(e,item.link)} >
                            {item.text}
                        </a><br /></>
                            : <> <h4 className="hnavbar-title"> {item.text} </h4></>)}
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
                             </a><br/></>
                             onClick={execMarkdown(item.link)
 */