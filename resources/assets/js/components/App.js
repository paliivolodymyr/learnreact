import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

let LandingPage = (props) => {
    return <h1 className="mt-5">Landing Page</h1>;
};
let SignInPage = (props) => {
    return <h1 className="mt-5">Sign In Page</h1>;
};
let CreateAccountPage = (props) => {
    return <h1 className="mt-5">Create Account Page</h1>;
};
let DashboardPage = (props) => {
    return <h1 className="mt-5">Dashboard Page</h1>;
};

let Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-2 px-sm-3">
                <Link className="navbar-brand" to="/">DEV.TO</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary ml-lg-2 ml-sm-0 mt-2 mt-lg-0" to="/account/create">Create Account</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="btn btn-primary ml-lg-2 ml-sm-0 mt-2 mt-lg-0" to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/signin" component={SignInPage} />
                    <Route path="/account/create" component={CreateAccountPage} />
                    <Route path="/dashboard" component={DashboardPage} />
                </div>
            </BrowserRouter>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('app'));