import React, { useState } from "react";
const axios = require('axios')
// Please consider https://github.com/rsuite/rsuite

const Hnavbar = (props) => {
    const [markdown, setMarkdown] = useState("")
    let md = ""

    const loadMarkdown = ((name) => {
        // HERE AJAX CALL TO GET MARKDOWNS
        md = "## Markdown  \n" + name
        axios.get(name)
            .then(function (response) {
                // handle success
                md = response.data
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                setMarkdown(md);
                props.callback(md)
            });
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
                        {props.items.map((item) => item.type == 'link' ? <><a className="hnavbar-item" id={item.link} href={item.link} onClick={e => execMarkdown(e,item.link)} >
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
