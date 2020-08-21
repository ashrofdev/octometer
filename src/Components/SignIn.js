import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { PrimaryBtn } from '../Components/Btns';
import { Redirect, Link } from 'react-router-dom';

class SignIn extends Component {
    render() {
        return (
            <div className="signin_container">
                 <form onSubmit={this.props.signin} className="signin">
                    <header>
                        <h1 className="heading">Octometer</h1>
                    </header>
                    <div className="form">
                        <div>
                            <FontAwesome className="font" name="user-circle" size="2x"/>
                            <input name="email" placeholder="Email" className="input"/>
                        </div>
                        <div>
                            <FontAwesome  className="font" name="lock" size="2x"/>
                            <input name="password" type="password" placeholder="Password" style={{marginLeft: '2.5rem'}} className="input"/>
                        </div>
                        <div className="cta">
                            {
                                this.props.isLoading?
                                 <img className="loader" src={require('../img/loader.gif')}/>:null
                            }
                            <PrimaryBtn title='Sign in'/>
                        </div>
                        <p>Unable to signin or forgot <Link className="link" to="/resetpassword">password?</Link></p>

                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;