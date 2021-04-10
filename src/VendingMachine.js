import React from "react";
import NavBar from "./NavBar"
import { BrowserRouter, Route} from "react-router-dom"
import Home from "./Home";
import ApplePie from "./ApplePie";
import Pepsi from "./Pepsi";
import Skittles from "./Skittles";

const VendingMachine = () => {

    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/applepie">
                    <ApplePie />
                </Route>
                <Route exact path="/pepsi">
                    <Pepsi />
                </Route>
                <Route exact path="/skittles">
                    <Skittles />
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;