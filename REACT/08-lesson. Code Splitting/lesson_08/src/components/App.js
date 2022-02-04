import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./Layout";

import Home from "../views/Home";
import Shows from "../views/Shows";
import About from "../views/About";
import NotFound from "../views/NotFound";
import ShowDetails from "../views/ShowDetails";
import routes from "../routes";

export default function App() {
    return (
        <Layout>
            <Switch>
                <Route path={routes.home} exact component={Home} />
                <Route path={routes.shows} exact component={Shows} />
                <Route path={routes.showDetails} component={ShowDetails} />
                <Route path={routes.about} component={About} />
                <Route component={NotFound} />
                <Redirect to="/" />
            </Switch>
        </Layout>
    );
}
