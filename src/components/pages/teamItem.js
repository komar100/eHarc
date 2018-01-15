"use strict"
import React from 'react';
import { Button} from 'reactstrap';

class TeamItem extends React.Component {

  render(){
    return(
      <tr>
        <td></td>
        <td>{this.props.name}</td>
        <td>{this.props.boss}</td>
        <td><Button>Lista osób</Button></td>
      </tr>
    )
  }
}
export default TeamItem;
