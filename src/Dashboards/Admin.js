import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';

class Admin extends Component {

    state = {
        page: 'One'
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
                                        this.state.page==='One'?
                                        <li className="clicked"  onClick={()=>this.changePage('One')}>
                                        <FontAwesome className="font" name="street-view"/><span className="text">One</span></li>
                                        :
                                        <li className="One"  onClick={()=>this.changePage('One')}>
                                        <FontAwesome className="font" name="street-view"/><span className="text">One</span></li>
                                    }
                                    {
                                        this.state.page==='Two'?
                                        <li className="clicked"  onClick={()=>this.changePage('Two')}>
                                        <FontAwesome className="font" name="tasks"/><span className="text">Two</span></li>
                                        :
                                        <li className="Two"  onClick={()=>this.changePage('Two')}>
                                        <FontAwesome className="font" name="tasks"/><span className="text">Two</span></li>
                                    }
                                    {
                                        this.state.page==='Three'?
                                        <li className="clicked"  onClick={()=>this.changePage('Three')}>
                                        <FontAwesome className="font" name="tasks"/><span className="text">Three</span></li>
                                        :
                                        <li className="Three"  onClick={()=>this.changePage('Three')}>
                                        <FontAwesome className="font" name="tasks"/><span className="text">Three</span></li>
                                    }
                                    
                                </ul>
                            </nav>
                        </section>

                        {/* link back to homepage */}

                        {/* content to be displayed */}
                        <section className="content">
                            {
                                this.state.page==='One'?
                                    'page one -----Start coding the page section when you see this-----':
                                this.state.page==='Two'?
                                    'page two -----Start coding the page section when you see this-----':
                                this.state.page==='Three'?
                                    'page three -----Start coding the page section when you see this-----':null
                            }
                        </section>
                        
                    </main>
                
            </div>
        );
    }
}

export default Admin;