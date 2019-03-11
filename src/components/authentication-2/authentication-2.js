

import React, { Component } from 'react';
import './authentication-2.scss';
import logo from '../../assests/icon-zipgrid.png';


class authentication_2 extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div className="login-page">
                <div className="login-wrapper">
                    <div className="login-part-1">
                    </div>
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="login-part-2">
                        <div className=" login-field-spacing sign-in-heading">Sign In</div>
                        <div className="login-field">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
                                </div>
                                <input type="email" placeholder="Email" className="form-control" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" placeholder="Password" className="form-control" />
                            </div>
                            <button type="button" className="continue-btn login-field-spacing all-primary-button form-control btn btn-primary">Continue</button>
                            <div className="login-or">
                                <hr className="hr-or" />
                                <span className="span-or">OR</span>
                            </div>
                            <div className="social-media-icon">
                                <button type="button" className="login-field-spacing all-secondart-button  btn btn-primary"><i className="fab fa-facebook-f"></i>Facebook</button>
                                <button type="button" className="google-background-clr login-field-spacing all-secondart-button  btn btn-primary"><i className="fab fa-google-plus-g"></i>Google</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default authentication_2;