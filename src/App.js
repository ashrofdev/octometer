import React, { Component } from 'react';
import './Styles/main.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Admin from './Dashboards/AdminDashboard/index'
import Stakeholder from './Dashboards/StakeholdersDashboard/index'
import Subscriber from './Dashboards/SubscribersDashboard/index'
import SignIn from './Components/SignIn'


class App extends Component {

  state = {
    isAuth: false
  }

  signin = (e)=>{
    e.preventDefault()
    this.setState({isAuth: true})
  }

  render() {
    return (
      <div className="App">
        <Router>
  
          {
            this.state.isAuth?
            <Redirect to="/admin"/>:
            <Redirect to="/"/>
          }
  
          <Switch>
            {/* <Route path="/resetpassword">
              <ResetPassword/>
            </Route> */}
            <Route path="/admin">
              <Admin/>
            </Route>
            <Route path="/stakeholder">
              <Stakeholder/>
            </Route>
            <Route path="/subscriber">
              <Subscriber/>
            </Route>
            <Route path="/">
              <SignIn signin={this.signin}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
