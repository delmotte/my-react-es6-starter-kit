import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import {Hello} from "./app/hello";
import "./index.scss";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Hello}/>
    </Router>,
    document.getElementById('root')
);
