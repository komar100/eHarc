"use strict"
import React from 'react';
import Menu from './menu';
import Footer from './footer';
import Login from './pages/login';
import Record from './pages/record';
import EventsList from './pages/eventsList';
import MainForm from './pages/mainForm';
import EventForm from './pages/eventForm';
import ReactLoading from 'react-loading'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class Main extends React.Component{
  render() {
    return(

      <Router>
      <div>
      <header class="menu">
        <Menu />
      </header>
      <main class= "main-content ">

        <div class="main-image">
        </div>

        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/addScout' component= {MainForm} />
          <Route path='/addEvent' component= {EventForm} />
          <Route path='/record' component={Record} />
          <Route path='/eventsList' component={EventsList} />
        </Switch>
      </main>
  </div>

</Router>
    );
  }
}

export default Main;
