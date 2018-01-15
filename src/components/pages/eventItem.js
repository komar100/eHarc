"use strict"
import React from 'react';
import { Button} from 'reactstrap';

class EventItem extends React.Component {

  render(){
    return(
      <tr>
      <td></td>
      <td>{this.props.name}</td>
      <td>{this.props.start}</td>
      <td>{this.props.finish}</td>
      <td>{this.props.place}</td>
      <td><Button>Szczegóły</Button></td>
      </tr>
    )
  }
}
export default EventItem;
