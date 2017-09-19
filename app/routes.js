import React from 'react'
import { Router, Route, Link, hashHistory, IndexRoute, browserHistory, Redirect } from 'react-router'

import Login from './containers/Login'
import BasePage from './containers/BasePage'

export default (
    <Router history={history}>
        <Redirect from="/" to="/login" />
        <Route path="/" component={BasePage}>
            {/* Default route*/}
            <IndexRoute component={Login} />
            <Route path="/login" component={Login} />
        </Route>
    </Router>
);
