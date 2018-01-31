//client/components/Add.js
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');
class Add extends React.Component {
constructor() {
      super();
this.state = {
       // description: '',
        //amount: '',
        //month: '',
        name: '',
        email: '',
        phone: '',
        company: '',
        year: '',
        messageFromServer: '',
        modalIsOpen: false
      }
this.handleSelectChange = this.handleSelectChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.insertNewExpense = this.insertNewExpense.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
closeModal() {
      this.setState({
        modalIsOpen: false,
       // description: '',
        //amount: '',
        //month: 'Jan',
        name: '',
        email: '',
        phone: '',
        company: '',
        year: 2018,
        messageFromServer: ''
      });
    }
componentDidMount() {
   /* if(this.props.selectedMonth == 'All'){
      this.setState({
        month: 'Jan'
      });
    }else{
      this.setState({
        month: this.props.selectedMonth
      });
    }*/
this.setState({
        year: this.props.selectedYear
      });
    }
componentWillReceiveProps(nextProps){
    /*  if(this.props.selectedMonth == 'All'){
        this.setState({
          month: 'Jan'
        });
      }else{
        this.setState({
          month: this.props.selectedMonth
        });
      }*/
this.setState({
        year:nextProps.selectedYear
      })
    }
handleSelectChange(e) {
    /*  if (e.target.name == 'month') {
        this.setState({
          month: e.target.value
        });
      }*/
      if (e.target.name == 'year') {
        this.setState({
          year: e.target.value
        });
      }
    }
onClick(e) {
      this.insertNewExpense(this);
    }
insertNewExpense(e) {
      axios.post('/insert',
        querystring.stringify({
         // desc: e.state.description,
          //amount: e.state.amount,
          //month: e.state.month,
          name: e.state.name,
          phone: e.state.phone,
          email: e.state.email,
          company: e.state.company,
          year: e.state.year
        }), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function(response) {
        e.setState({
          messageFromServer: response.data
        });
      });
    }
handleTextChange(e) {
      //if (e.target.name == "description") {
        if (e.target.name == "name") {
        this.setState({
          //description: e.target.value
          name: e.target.value
        });
      }
//if (e.target.name == "amount") {
  if (e.target.name == "email") {
        this.setState({
          //amount: e.target.value
          email: e.target.value
        });
      }
      if (e.target.name == "phone") {
        this.setState({
          //amount: e.target.value
          phone: e.target.value
        });
      }
      if (e.target.name == "company") {
        this.setState({
          //amount: e.target.value
          company: e.target.value
        });
      }
    }
render() {
   if(this.state.messageFromServer == ''){
      return (
        <div>
      <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add Customer"
       className="Modal">
<Link to={{pathname: '/', search: 'year='+this.state.year }} style={{ textDecoration: 'none' }}>
       <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
      </Link><br/>
<fieldset>
      
       <label for="name">Name:</label><input type="text" id="name" name="name" value={this.state.name} onChange={this.handleTextChange}></input>
      
       <label for="email">Email Id:</label><input type="text" id="email" name="email" value={this.state.email} onChange={this.handleTextChange}></input>
      
       <label for="phone">Phone No:</label><input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleTextChange}></input>
      
       <label for="company">Company:</label><input type="text" id="company" name="company" value={this.state.company} onChange={this.handleTextChange}></input>

      
       <label for="year">Year:</label><select id="year" name="year" value={this.state.year} onChange={this.handleSelectChange}>
            <option value="2018" id="18">2018</option>
            <option value="2019" id="19">2019</option>
         </select>
      </fieldset>
<div className='button-center'>
        <br/>
        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New Customer</Button>
       </div>
          </Modal>
        </div>
      )
   }
   else{
    return (
     <div>
       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Add Customer"
        className="Modal">
<div className='button-center'>
        <h3>{this.state.messageFromServer}</h3>
        <Link to={{pathname: '/', search: 'year='+this.state.year}} style={{ textDecoration: 'none' }}>
         <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
        </Link>
       </div>
      </Modal>
       </div>
     )
    }
   }
}
export default Add;
