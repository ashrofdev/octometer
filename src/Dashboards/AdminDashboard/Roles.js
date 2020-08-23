import React, { Component } from 'react';
import { SecondaryBtn, PrimaryBtnBlue } from '../../Components/Btns';

class Roles extends Component {

    state = {
        roles: [{}]
    }
    render() {
        return (
            <div className="roles">
                <h2 className="heading">Roles</h2>
                {
                    this.state.roles.length===0?
                        <p className="empty-list">You have not defined a role</p>:
                    <div>
                        <div className="list">
                            <div className="role">
                                <p className="name">Marketer</p>                                
                                <p className="description">Lorem ispum dorla sit kioe weiun vhvstw kriae aeut</p>
                                <PrimaryBtnBlue title="Assign role"/>
                            </div><div className="role">
                                <p className="name">Marketer</p>                                
                                <p className="description">Lorem ispum dorla sit kioe weiun vhvstw kriae aeut</p>
                                <PrimaryBtnBlue title="Assign role"/>
                            </div>
                            <div className="role">
                                <p className="name">Marketer</p>                                
                                <p className="description">Lorem ispum dorla sit kioe weiun vhvstw kriae aeut</p>
                                <PrimaryBtnBlue title="Assign role"/>
                            </div><div className="role">
                                <p className="name">Marketer</p>                                
                                <p className="description">Lorem ispum dorla sit kioe weiun vhvstw kriae aeut</p>
                                <PrimaryBtnBlue title="Assign role"/>
                            </div><div className="role">
                                <p className="name">Marketer</p>                                
                                <p className="description">Lorem ispum dorla sit kioe weiun vhvstw kriae aeut</p>
                                <PrimaryBtnBlue title="Assign role"/>
                            </div>
                            <div className="role">
                                <p className="name">Marketer</p>                                
                                <p className="description">Lorem ispum dorla sit kioe weiun vhvstw kriae aeut</p>
                                <PrimaryBtnBlue title="Assign role"/>
                            </div><div className="role">
                                <p className="name">Marketer</p>                                
                                <p className="description">Lorem ispum dorla sit kioe weiun vhvstw kriae aeut</p>
                                <PrimaryBtnBlue title="Assign role"/>
                            </div>
                            
                        </div>
                    </div>
                }
                <SecondaryBtn title="Define a role"/>
            </div>
        );
    }
}

export default Roles;