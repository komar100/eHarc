"use strict"
import React from 'react';
import { Button} from 'reactstrap';

class ScoutItem extends React.Component {

  render(){
    return(
      <tr>
        <td></td>
        <td>{this.props.name}</td>
        <td>{this.props.surname}</td>
        <td>{this.props.team}</td>
        <td><Button>Szczegóły</Button></td>
      </tr>
    )
  }
}
export default ScoutItem;
