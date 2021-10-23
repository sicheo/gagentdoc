// SEND DATA FROM CHILD TO PARENT
// https://thewebdev.info/2021/02/05/how-to-send-data-from-child-to-parent-component-with-react-hooks/

import React, { useState, useEffect, useCallback } from "react";
import Hnavbar from "../components/hnavbar";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Getstarted() {
    const [navs, setNavs] = useState([]);
    const text = "##Get started  \nFollow step by step tutorial to install and set up your GAGENT app"
    const [markdown, setMarkdown] = useState(text)
   

    useEffect(() => {
        // HERE AJAX CALL TO GET LINKS
        setTimeout(() => setNavs([
            { key:0,text: "Introduction", link: "" , type:"title"},
            { key: 1, text: "System overview", link: "/markdown/overview", type: "link" },
            { key: 2, text: "Installation", link: "", type: "title" },
            { key: 3, text: "Installation on Node", link: "/markdown/node", type: "link" },
            { key: 3, text: "Installation on Docker", link: "/markdown/docker", type: "link" },
            { key: 4, text: "BB-400 installation", link: "/markdown/bb-400", type:"link" },
            { key: 5, text: "Cisco IC3000 Installation", link: "/markdown/ic3000", type: "link" },
            { key: 6, text: "Set Up", link: "", type: "title" },
            { key: 7, text: "Configure agent source", link: "/markdown/confsource", type: "link" },
            { key: 8, text: "Configure agent destination", link: "/markdown/confdest", type: "link" },
            { key: 9, text: "Configure agent database", link: "/markdown/confdb", type: "link" },
            { key: 10, text: "Connect to factory IT", link: "", type: "text" },
            { key: 11, text: "Connect with OPCUA", link: "/markdown/connopcua", type: "link" },
            { key: 12, text: "Connect with MQTT", link: "/markdown/connmqtt", type: "link" },
            { key: 13, text: "Connect with Active Directory", link: "/markdown/connad", type: "link" },
        ]), 100);
    }, []);

    const callback = useCallback((markdown) => {
        setMarkdown(markdown);
    }, []);

    return (
        <>
        <div className="classPageSideHead">
                <img src="getstart.png" alt="Get Started" className="classPageSideImage" />
                <span className="classPageSideSpan">Get Started</span>
        </div>
        <div className="classPage" >
                <div className="classPageNavigation">
                    <Hnavbar items={navs} callback={callback}/>
                </div>
 
                <div className="classPageContent">
                    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
            </div>
            </>
    );
}

export default Getstarted;