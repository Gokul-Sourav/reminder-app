import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './components/register.component';
import Home from './components/home.component';
import GetReminders from './components/getReminders.component';
import EditReminders from './components/editReminders.component';
import CreateReminders from './components/createReminders.component';
import Notes from './components/notes.component';

require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <Route exact path='/' component={Register}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/getReminders' component={GetReminders}/>
          <Route exact path='/editReminders' component={EditReminders}/>
          <Route exact path='/createReminders' component={CreateReminders}/>
          <Route path='/notes' component={Notes}/>
        </div>
      </Router>
      </div>
  )}
}

export default App;
