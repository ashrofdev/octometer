import React, { Component } from 'react';
import { SecondaryBtn } from '../../Components/Btns';

class Stakeholders extends Component {

    state = {
        stakeholders: []
    }
    render() {
        return (
            <div className="stakeholders">
                <h2 className="heading">Stakeholders</h2>
                {
                    this.state.stakeholders.length===0?
                        <p className="empty-list"> You have not registered any stake holder</p>:
                    <div>
                        <div className="list">
                            <div className="stakeholder">
                                <p>1</p>                                
                                <p>2/4/2020</p>
                                <p>Yohn Doe</p>
                                <p>branch</p>
                                <p>role</p>
                            </div>
                            <div className="stakeholder">
                                <p>2</p>                                
                                <p>2/4/2020</p>
                                <p>Yohn Doe</p>
                                <p>branch</p>
                                <p>role</p>
                            </div>
                            <div className="stakeholder">
                                <p>3</p>                                
                                <p>2/4/2020</p>
                                <p>Yohn Doe</p>
                                <p>branch</p>
                                <p>role</p>
                            </div>
                            <div className="stakeholder">
                                <p>4</p>                                
                                <p>2/4/2020</p>
                                <p>Yohn Doe</p>
                                <p>branch</p>
                                <p>role</p>
                            </div>
                            <div className="stakeholder">
                                <p>5</p>                                
                                <p>2/4/2020</p>
                                <p>Yohn Doe</p>
                                <p>branch</p>
                                <p>role</p>
                            </div>
                            <div className="stakeholder">
                                <p>3</p>                                
                                <p>2/4/2020</p>
                                <p>Yohn Doe</p>
                                <p>branch</p>
                                <p>role</p>
                            </div>
                            <div className="stakeholder">
                                <p>4</p>                                
                                <p>2/4/2020</p>
                                <p>Yohn Doe</p>
                                <p>branch</p>
                                <p>role</p>
                            </div>
                            <div className="stakeholder">
                                <p>5</p>                                
                                <p>2/4/2020</p>
                                <p>Yohn Doe</p>
                                <p>branch</p>
                                <p>role</p>
                            </div>
                            <div className="stakeholder">
                                <p>3</p>                                
                                <p>2/4/2020</p>
                                <p>Yohn Doe</p>
                                <p>branch</p>
                                <p>role</p>
                            </div>
                            <div className="stakeholder">
                                <p>4</p>                                
                                <p>2/4/2020</p>
                                <p>Yohn Doe</p>
                                <p>branch</p>
                                <p>role</p>
                            </div>
                            <div className="stakeholder">
                                <p>5</p>                                
                                <p>2/4/2020</p>
                                <p>Yohn Doe</p>
                                <p>branch</p>
                                <p>role</p>
                            </div>
                        </div>
                    </div>
                }
                <SecondaryBtn title="Register new Stakeholder"/>
            </div>
        );
    }
}

export default Stakeholders;