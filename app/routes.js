import React from 'react'
import { Router, Route, Link, hashHistory, IndexRoute, browserHistory, Redirect } from 'react-router'
import { history } from 'history'


// import Login from './containers/Login'
console.log(history)
export default(
    <Router history={history}>
        {/* <Redirect from="/" to="/login"/> */}
    </Router>
);
