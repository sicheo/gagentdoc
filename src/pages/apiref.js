import React, { useState, useEffect, useCallback } from "react";
import Hnavbar from "../components/hnavbar";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


function Apiref() {
    const [navs, setNavs] = useState([]);
    const text = "## Api Reference  \nConsult the documentation for the server API.  \n  \n![alt text](Api.png 'Api')"
    const [markdown, setMarkdown] = useState(text)


    useEffect(() => {
        // HERE AJAX CALL TO GET LINKS
        setTimeout(() => setNavs([
            { key: 0, text: "Api Reference", link: "", type: "title" },
            { key: 1, text: "Get server info", link: "/markdown/server", type: "link" },
            { key: 2, text: "Get agent list", link: "/markdown/agents", type: "link" },
            { key: 3, text: "Get agent info", link: "/markdown/agent", type: "link" },
            { key: 4, text: "Start agent", link: "/markdown/agentstart", type: "link" },
            { key: 5, text: "Stop agent", link: "/markdown/agentstop", type: "link" },
            { key: 6, text: "Add Agent", link: "/markdown/agentadd", type: "link" },
            { key: 7, text: "Modify Agent", link: "/markdown/agentmodify", type: "link" },
            { key: 8, text: "Delete Agent", link: "/markdown/agentdel", type: "link" },
            { key: 9, text: "Get Log", link: "/markdown/logs", type: "link" },
        ]), 100);
    }, []);

    const callback = useCallback((markdown) => {
        setMarkdown(markdown);
    }, []);

    return (
        <>
            <div className="classPageSideHead">
                <img src="apireference.png" alt="Api Reference" className="classPageSideImage" />
                <span className="classPageSideSpan">Api Refence</span>
            </div>
            <div className="classPage" >
                <div className="classPageNavigation">
                    <Hnavbar items={navs} callback={callback} />
                </div>

                <div className="classPageContent">
                    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
                </div>
            </div>
        </>
    );
}

export default Apiref;