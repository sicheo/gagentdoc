import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import Getstarted from "./pages/getstarted";
import Apiref from "./pages/apiref";
import Devguide from "./pages/devguide";
import Dataint from "./pages/dataint";
import Rnotes from "./pages/rnotes";
import License from "./pages/license";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mt-2" style={{ marginTop: 10, marginLeft:10 }}>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/getstarted">
                    <Getstarted />
                </Route>
                <Route path="/apiref">
                    <Apiref />
                </Route>
                <Route path="/devguide">
                    <Devguide />
                </Route>
                <Route path="/dataint">
                    <Dataint />
                </Route>
                <Route path="/rnotes">
                    <Rnotes />
                </Route>
                <Route path="/license">
                    <License />
                </Route>
                <Redirect to="/home" />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}
