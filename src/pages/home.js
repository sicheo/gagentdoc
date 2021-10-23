// https://lokalise.com/blog/react-i18n-intl/
// TODO implement i18n
// https://www.npmjs.com/package/react-markdown
// TODO implement markdown
import Maintitle from "../components/maintitle";
import { Searchcontainer } from "../components/searchcontainer";
import Navwin from "../components/navwin";
function Home() {
    return (
        <div className="Home">
            <div className="HomeUpper">
                <img src="gagentlogo.png" alt="Home" className="classNavwinImage" style={{ width: "20%" }} />
                <Maintitle title="Documentation" subtitle="Examples, tutorials, references, APIs, and best practices" />
                <Searchcontainer />
            </div>
            <div className="HomeLower">
                <Navwin title="Get Started" image="getstart.png"
                    content="Follow step by step tutorial to install and set up your GAGENT app" link="/getstarted" />
                <Navwin title="API Reference" image="apireference.png"
                    content="Consult the documentation for the server API." link="/apiref" />
                <Navwin title="Developer Guide" image="devguide.png"
                    content="Explore detailed descriptions of concepts, architecture, references, and examples for implementing various features." link="/devguide" />
                <Navwin title="Data Integrity" image="dataintegrity.png"
                    content="Explore data integrity compliance features." link="/dataint" />
                <Navwin title="Release Notes" image="releasenotes.png"
                    content="Learn about new features, deprecations, improvements, and fixes in GAGENT from regular release notes." link="/rnotes" />
                <Navwin title="License Management" image="license.png"
                    content="Manage product licence." link="/license" />
            </div>
        </div>
    );
}

export default Home;