import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from "./pages/about";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Grid from "../stylesheets/grid.css"

const App = () => (
    <div>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </HashRouter>
    </div>
)

export default App;