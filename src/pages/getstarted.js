import React, { useState, useEffect } from "react";
import Hnavbar from "../components/hnavbar";



function Getstarted() {
    const [navs, setNavs] = useState( [{ text: "Link 1", link: "/getstarted" }, { text: "Link 2", link: "/home" }]);

    useEffect(() => {
        setTimeout(() => setNavs([
            { text: "this is text 1", link: "/getstarted" },
            { text: "this is text 2", link: "/apiref" },
            { text: "this is text 3", link: "/dataint" },
            { text: "this is text 4", link: "/devguide" },
            { text: "this is text 5", link: "/rnotes" }
        ]), 1000);
    }, []);

    return (
        <>
        <div className="classPageSideHead">
                <img src="getstart.png" alt="Get Started" className="classPageSideImage" />
                    Get Started
        </div>
        <div className="classPage" >
                <div className="classPageNavigation">
                    <Hnavbar items={ navs}/>
                </div>
 
            <div className="classPageContent">
                    Get started
            </div>
            </div>
            </>
    );
}

export default Getstarted;