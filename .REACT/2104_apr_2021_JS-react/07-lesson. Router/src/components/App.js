import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import Layout from "./Layout";
import Navigation from "./Navigation";

import Home from "../views/Home";
import Shows from "../views/Shows";
import About from "../views/About";
import NotFound from "../views/NotFound";
import ShowDetails from "../views/ShowDetails";
import routes from "../routes";

export default function App() {
    return (
        <Layout>
            {/* <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/shows">Shows</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul> */}

            <Navigation />
            <Switch>
                <Route path={routes.home} exact component={Home} />
                <Route path={routes.shows} exact component={Shows} />
                <Route path={routes.showDetails} component={ShowDetails} />
                <Route path={routes.about} component={About} />
                <Route component={NotFound} />
                <Redirect to="/" />
            </Switch>

            {/* <Switch> */}
            {/* <Route path="/" exact component={Home} />
                <Route path="/shows" exact component={Shows} />
                <Route path="/shows/:showId" component={ShowDetails} />
                <Route path="/about" component={About} />
                <Route component={NotFound} /> */}
            {/* <Redirect to="/" /> */}
            {/* </Switch> */}
        </Layout>
    );
}

// switch (key) {
//     case value:
//         break;

//     case value:
//         break;

//     default:
//         break;
// }
