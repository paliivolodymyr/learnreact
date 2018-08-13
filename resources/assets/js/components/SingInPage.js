import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import Button from '@material-ui/core/Button';
import validate from "validate.js";

const FormField = ({
                       input,
                       type,
                       name,
                       className,
                       placeholder,
                       meta: { touched, error, warning }
                   }) => (
    <div className="form-group">
        <input {...input } name={name} type={type} className={
            `${className} ${
            touched && (
                (error && 'is-invalid')
            )
                }`
        } placeholder={placeholder} />
        {
            touched &&
            (error && <span className="invalid-feedback">{error}</span>)
        }
    </div>
);

const validatorSignInForm = (values) => {
    const result = validate(values, {
        email: {
            presence: {
                message: '^Please enter your email address.'
            },
            email: {
                message: '^Please enter a valid email address.'
            }
        },
        password: {
            presence: {
                message: '^Please enter your password.'
            }
        }
    });

    return result;
};

export class SignInPage extends Component {
    constructor(props) {
        super(props);

        this.processSubmit = this.processSubmit.bind(this);
    }

    componentWillMount() {
        // do something like setting default state
    }

    processSubmit(values) {
        console.log('send ajax');
    }

    render() {
        const {handleSubmit, submitting} = this.props;

        return (
            <div className="container">
                <div className="row justify-content-center fullscreen">
                    <div className="col-8 align-self-center">
                        <div id="sing-in-form">
                            <h2 className="text-center"><span>&lt;/&gt;</span>Smart Cart</h2>
                            <div className="row justify-content-center">
                                <div className="col-10">
                                    <form onSubmit={handleSubmit(this.processSubmit)}>
                                        <Field
                                            name="email"
                                            component={FormField}
                                            id="email"
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                        />
                                        <Field
                                            name="password"
                                            component={FormField}
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                        <div className="form-group mt-4 justify-content-center">
                                            <Button variant="contained" color="primary">
                                                Log in
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


SignInPage = reduxForm({
    form: 'signin',
    validate: validatorSignInForm
})(SignInPage);
