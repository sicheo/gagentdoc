import React, { useState, useEffect, useCallback } from "react";
import Hnavbar from "../components/hnavbar";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Devguide() {
    const [navs, setNavs] = useState([]);
    const text = "## Development Guide  \nExplore detailed descriptions of concepts, architecture,  \nreferences, and examples for implementing various features.  \n  \n![alt text](Develop.png 'Develop')"
    const [markdown, setMarkdown] = useState(text)


    useEffect(() => {
        // HERE AJAX CALL TO GET LINKS
        setTimeout(() => setNavs([
            { key: 0, text: "System Architecture", link: "", type: "title" },
            { key: 1, text: "Gagent server", link: "/markdown/archserv", type: "link" },
            { key: 2, text: "Gagent scanning loop", link: "/markdown/archloop", type: "link" },
            { key: 3, text: "Source Pluggable drivers", link: "", type: "title" },
            { key: 4, text: "Source driver Interface", link: "/markdown/driverif", type: "link" },
            { key: 5, text: "S7 driver", link: "/markdown/drivers7", type: "link" },
            { key: 6, text: "EIP driver", link: "/markdown/drivereip", type: "link" },
            { key: 7, text: "Modbus driver", link: "/markdown/drivermodbus", type: "link" },
            { key: 8, text: "TDS driver", link: "/markdown/drivertds", type: "link" },
            { key: 9, text: "Mettler SICS driver", link: "/markdown/driversics", type: "link" },
            { key: 10, text: "Proprietary Drivers", link: "/markdown/driverprop", type: "link" },
            { key: 11, text: "Write a new source driver", link: "/markdown/driverdev", type: "link" },
            { key: 12, text: "Destination Pluggable drivers", link: "", type: "title" },
            { key: 12, text: "Destination driver interface", link: "/markdown/destif", type: "link" },
            { key: 13, text: "Redis Cluster Driver", link: "/markdown/destredis", type: "link" },
            { key: 14, text: "MQTT Broker Driver", link: "/markdown/destmqtt", type: "link" },
            { key: 15, text: "Write a new destination driver", link: "/markdown/destnew", type: "link" },
        ]), 100);
    }, []);

    const callback = useCallback((markdown) => {
        setMarkdown(markdown);
    }, []);

    return (
        <>
            <div className="classPageSideHead">
                <img src="devguide.png" alt="Developer Guide" className="classPageSideImage" />
                <span className="classPageSideSpan">Developer Guide</span>
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

export default Devguide;