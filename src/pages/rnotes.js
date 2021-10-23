import React, { useState, useEffect, useCallback } from "react";
import Hnavbar from "../components/hnavbar";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Rnotes() {
    const [navs, setNavs] = useState([]);
    const text = "Learn about new features, deprecations, improvements, and fixes  \nin GAGENT from regular release notes."
    const [markdown, setMarkdown] = useState(text)


    useEffect(() => {
        // HERE AJAX CALL TO GET LINKS
        setTimeout(() => setNavs([
            { key: 0, text: "Release Notes", link: "", type: "title" },
            { key: 1, text: "Last Release", link: "/markdown/rnlast", type: "link" },
            { key: 2, text: "Release History", link: "/markdown/rnhist", type: "link" },
        ]), 1000);
    }, []);

    const callback = useCallback((markdown) => {
        setMarkdown(markdown);
    }, []);

    return (
        <>
            <div className="classPageSideHead">
                <img src="releasenotes.png" alt="Release Notes" className="classPageSideImage" />
                <span className="classPageSideSpan">Release Notes</span>
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

export default Rnotes;