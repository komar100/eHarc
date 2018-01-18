"use strict"
import React from 'react';
import Menu from './menu';
import Footer from './footer';
import Login from './pages/login';
import EventsList from './pages/eventsList';
import ScoutsList from './pages/scoutsList';
import MainForm from './pages/mainForm';
import EventForm from './pages/eventForm';
import ScoutDetails from './pages/scoutDetails';
import ScoutEditForm from './pages/scoutEditForm';
import EventDetails from './pages/eventDetails';
import EventEditForm from './pages/eventEditForm';
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
          <Route path='/scoutsList' component={ScoutsList} />
          <Route path='/eventsList' component={EventsList} />
          <Route path='/scoutDetails/:_id' exact component={ScoutDetails} />
          <Route path='/scoutEditForm/:_id' exact component={ScoutEditForm} />
          <Route path='/eventDetails/:_id' exact component={EventDetails} />
          <Route path='/eventEditForm/:_id' exact component={EventEditForm} />
        </Switch>
      </main>
  </div>

</Router>
    );
  }
}

export default Main;
