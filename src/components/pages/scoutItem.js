"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {deleteScouts} from '../../actions/scoutsActions';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class ScoutItem extends React.Component {


  handleSubmit(){
    const _id = this.props._id;
    this.props.deleteScouts(_id);
    this.setState({modalIsOpen: false});
  }
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render(){
    return(
      <tr>
        <td></td>
        <td>{this.props.name}</td>
        <td>{this.props.surname}</td>
        <td>{this.props.team}</td>
        <td><Link to={'/scoutDetails/' + this.props._id}><button class='btn btn-primary my-2 my-sm-0'>Szczegóły</button></Link></td>
        <td><button class='btn btn-danger my-2 my-sm-0' onClick={this.openModal}>Usuń</button></td>




        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Czy na pewno chcesz usunąc?</h2>

          <button class='modalButton btn btn-danger my-2 my-sm-0' onClick={this.handleSubmit.bind(this)}>Usuń</button>
          <button class='modalButton btn btn-primary my-2 my-sm-0' onClick={this.closeModal}>Anuluj</button>
        </Modal>
          </tr>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    deleteScouts: deleteScouts
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(ScoutItem);
