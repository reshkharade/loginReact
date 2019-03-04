import React, { Component } from 'react';
import './authentication.scss';
import logo from '../../assests/icon-zipgrid.png';


class Authentication extends Component {

    render() {

        return (
            <div className="login-page">
                <div>
                    <img className="login-logo" src={logo} alt="Zipgrid Icon" />
                </div>
                <div>
                    <div className="sign-in">
                        Sign In
                </div>
                    <form>
                        <div className="login-field-spacing input-group">
                            <span class="glyphicon glyphicon-user"></span>
                            <input type="text" className="form-control" name="username" placeholder="Login with Email" />
                        </div>
                        <button type="button" className=" form-control all-primary-button login-continue-btn btn btn-primary">continue</button>
                        <div className="login-field-spacing">
                           OR 
                </div>
                        <div>
                            <button type="button" class="facebook-btn loginBtn">Facebook</button>
                            <button type="button" class="google-btn loginBtn">Google</button>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Authentication;