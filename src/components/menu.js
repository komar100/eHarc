"use strict"
import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component{


  render(){
    return(
      <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">eHarc</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <Link to='/scoutsList' class="nav-link">Ewidencja<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link to='/eventsList' class="nav-link">Wydarzenia</Link>
            </li>
          </ul>
  </div>
</nav>
  )
}
}
export default Menu;
