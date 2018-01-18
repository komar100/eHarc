"use strict"
import React from 'react';
import { Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class ScoutEventItem extends React.Component {

  render(){
    return(
      <tr>
        <td></td>
        <td>{this.props.name}</td>
        <td>{this.props.surname}</td>
        <td>{this.props.team}</td>
        <td><input type='button' id='dodaj'  value='Dodaj'></input></td>

      </tr>
    )
  }
}
export default ScoutEventItem;
