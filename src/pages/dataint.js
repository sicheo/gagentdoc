// https://www.cognidox.com/blog/what-is-fda-21-cfr-part-11
import React, { useState, useEffect, useCallback } from "react";
import Hnavbar from "../components/hnavbar";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Dataint() {
    const [navs, setNavs] = useState([]);
    const text = "Explore data integrity compliance features."
    const [markdown, setMarkdown] = useState(text)


    useEffect(() => {
        // HERE AJAX CALL TO GET LINKS
        setTimeout(() => setNavs([
            { key: 0, text: "CFR Part 11", link: "", type: "title" },
            { key: 1, text: "Overview", link: "/markdown/dataintov", type: "link" },
            { key: 2, text: "Validation", link: "/markdown/dataintval", type: "link" },
            { key: 3, text: "Record Generation", link: "/markdown/dataintrg", type: "link" },
            { key: 4, text: "Audit Trails", link: "/markdown/dataintsudit", type: "link" },
            { key: 5, text: "Operational Control", link: "/markdown/dataintopc", type: "link" },
            { key: 6, text: "Security Control", link: "/markdown/dataintsecurity", type: "link" },
            { key: 7, text: "Digital Signatures", link: "/markdown/dataintdigsig", type: "link" },
            { key: 8, text: "Training", link: "/markdown/datainttrain", type: "link" },
        ]), 100);
    }, []);

    const callback = useCallback((markdown) => {
        setMarkdown(markdown);
    }, []);

    return (
        <>
            <div className="classPageSideHead">
                <img src="dataintegrity.png" alt="Data Integrity" className="classPageSideImage" />
                <span className="classPageSideSpan">Data Integrity</span>
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

export default Dataint;