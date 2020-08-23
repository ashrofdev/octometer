import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Stakeholders from './Stakeholders';
import Roles from './Roles';

class Admin extends Component {

    state = {
        page: 'Stakeholders'
    }

    changePage = (page) => {
        this.setState({page})
    }

    render() {
        const user = this.state.user
        const admin = this.props.admin
        const stage = this.props.stage
        return (
            <div className="dashboard">
                
                
                {/* {
                    ///// alert model
                    this.state.alert.on?
                    <Alert type={this.state.alert.type} 
                    message={this.state.alert.message}/>:null
                } */}


                {/* dashboard header */}
                <header className="header">
                    <h1 className="heading">OCTOMETER</h1>
                </header>
               
                    <main>

                            <section className="sidebar">
                           
                            <nav className="nav">
                                <ul className="list">
                                    {
                                        this.state.page==='Stakeholders'?
                                        <li className="clicked"  onClick={()=>this.changePage('Stakeholders')}>
                                        <FontAwesome className="font" name="street-view"/><span className="text">Stakeholders</span></li>
                                        :
                                        <li className="Stakeholders"  onClick={()=>this.changePage('Stakeholders')}>
                                        <FontAwesome className="font" name="street-view"/><span className="text">Stakeholders</span></li>
                                    }
                                    {
                                        this.state.page==='Roles'?
                                        <li className="clicked"  onClick={()=>this.changePage('Roles')}>
                                        <FontAwesome className="font" name="tasks"/><span className="text">Roles</span></li>
                                        :
                                        <li className="Roles"  onClick={()=>this.changePage('Roles')}>
                                        <FontAwesome className="font" name="tasks"/><span className="text">Roles</span></li>
                                    }
                                    {
                                        this.state.page==='assignroles'?
                                        <li className="clicked"  onClick={()=>this.changePage('assignroles')}>
                                        <FontAwesome className="font" name="tasks"/><span className="text">Assign roles</span></li>
                                        :
                                        <li className="Assign roles"  onClick={()=>this.changePage('assignroles')}>
                                        <FontAwesome className="font" name="tasks"/><span className="text">Assign roles</span></li>
                                    }
                                    
                                </ul>
                            </nav>
                        </section>

                        {/* link back to homepage */}

                        {/* content to be displayed */}
                        <section className="content">
                            {
                                this.state.page==='Stakeholders'?
                                    <Stakeholders/>:
                                this.state.page==='Roles'?
                                    <Roles/>:
                                this.state.page==='assignroles'?
                                    'page three -----Start coding the page section when you see this-----':null
                            }
                        </section>
                        
                    </main>
                
            </div>
        );
    }
}

export default Admin;