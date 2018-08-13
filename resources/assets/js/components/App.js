import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Link, Route} from 'react-router-dom';

import {combineReducers, createStore} from 'redux'
import {reducer as formReducer, reduxForm} from 'redux-form'

import {Provider} from 'react-redux'
import {SignInPage} from "./SingInPage";

// Other components are here collapsed

let LandingPage = (props) => {
    return <h1 className="mt-5">Landing Page</h1>;
};
let CreateAccountPage = (props) => {
    return <h1 className="mt-5">Create Account Page</h1>;
};
let DashboardPage = (props) => {
    return <h1 className="mt-5">Dashboard Page</h1>;
};

// const validatorSignInForm = (values) => {
//     const result = validate(values, {
//         email: {
//             presence: {
//                 message: '^Please enter your email address.'
//             },
//             email: {
//                 message: '^Please enter a valid email address.'
//             }
//         },
//         password: {
//             presence: {
//                 message: '^Please enter your password.'
//             }
//         }
//     });
//
//     return result;
// };

const rootReducer = combineReducers({
    form: formReducer,
    // my other reducers come here
});

const store = createStore(rootReducer);

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
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        {/*<Header />*/}
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/signin" component={SignInPage} />
                        <Route path="/account/create" component={CreateAccountPage} />
                        <Route path="/dashboard" component={DashboardPage} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('app'));