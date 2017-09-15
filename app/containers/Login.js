import React from 'react';
import { browserHistory, hashHistory } from 'react-router'
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

class Login extends React.Component {

    loginHandle() {
        this.context.router.push('/dashboardmonitor');
    }

    render() {
        return (
            <div className="login">
                { /* START panel */}
                <div className="panel panel-top mb-3">
                    <div className="text-left logo-text">Forti<span className="login-hightlight">SDWAN</span></div>
                    <div className="version-block">
                        <span>
                            <div className="login-circle first" />
                            <div className="login-circle second" />
                            <div className="login-circle third" />
                        </span>
                        <div className="version-text">VM v0.0.1</div>
                    </div>
                </div>
                <div className="panel panel-flat">
                    <div className="panel-heading text-center">
                        Sign In
                    </div>
                    <div className="panel-body">
                        <form role="form" data-parsley-validate="" noValidate className="mb-lg">
                            <div className="form-group has-feedback">
                                <input placeholder="Username" autoComplete="off" className="form-control" />
                                <span className="fa fa-user form-control-feedback text-muted"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" placeholder="Password" className="form-control" />
                                <span className="fa fa-lock form-control-feedback text-muted"></span>
                            </div>
                            <button type="submit" className="btn btn-block mt-lg" onClick={this.loginHandle.bind(this)}>Login</button>
                        </form>
                    </div>
                </div>
                { /* END panel */}
            </div>
        );
    }

}

export default Login;
