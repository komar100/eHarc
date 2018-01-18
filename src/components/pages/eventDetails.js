"use strict"
import React from 'react';
import { Button} from 'reactstrap';
import { connect } from 'react-redux';
import {getEventsId} from '../../actions/eventsActions.js';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import EventScouts from './eventScouts';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
};

class EventDetails extends React.Component {

  componentDidMount(){
    this.props.getEventsId(this.props.match.params._id);

  }  constructor() {
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
      <div class='container col-sm-12 col-md-10 col-lg-10 scouts_container'>
        <div class='row'>
        <h3>{this.props.events.name}</h3>
        <h3>{this.props.events.place}</h3>

        <Link to={'/eventEditForm/' + this.props.events._id}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Edytuj dane</button></Link>
        <form ref='uploadForm'
          id='uploadForm'
          action='/api/upload' 
          method='post'
          encType="multipart/form-data">
        <input type="file" name="file" />
        <input type='submit' value='Dodaj!' />
      </form>

        </div>
        <div class='row'>
          <h3>Lista uczestników</h3>
          <button class="btn btn-outline-success my-2 my-sm-0" onClick={this.openModal}>Dodaj uczestnika</button>
        </div>
        <div class='row table-responsive'>
          <table class='table table-hover table-striped '>
            <thead>
              <tr>
        				<th>#</th>
        				<th>Imię</th>
        				<th>Nazwisko</th>
        				<th>Załoga</th>
        				<th>usuń</th>
  			      </tr>
  		      </thead>
            <tbody>
            </tbody>
          </table>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Dodaj uczestnika</h2>
          <button class="btn btn-outline-success my-2 my-sm-0" onClick={this.closeModal}>Zamknij</button>
        <EventScouts />
        </Modal>
      </div>
    )
  };
};
function mapStateToProps(state,ownProps){

  return{
    events: state.events.events[0]

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getEventsId:getEventsId
  }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(EventDetails);
