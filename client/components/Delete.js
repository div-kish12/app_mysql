//client/components/Delete.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Delete extends React.Component {
constructor(){
  super();
  this.state={id: '', year: ''};
  this.onClick = this.onClick.bind(this);
  this.delete = this.delete.bind(this);
}
componentDidMount() {
    this.setState({
      id: this.props.expense._id,
     // month: this.props.expense.month,
      name: this.props.expense.name,
      email: this.props.expense.email,
      phone: this.props.expense.phone,
      company: this.props.expense.company,
      year: this.props.expense.year
    })
  }
componentWillReceiveProps(nextProps){
  this.setState({
    id: nextProps.expense._id,
   // month:nextProps.expense.month,
   name:nextProps.expense.name,
   email:nextProps.expense.email,
   phone:nextProps.expense.phone,
   company:nextProps.expense.company,
   year:nextProps.expense.year
  })
  }
onClick(e){
     this.delete(this);
    }
delete(e){
    axios.get('/delete?id='+e.state.id)
      .then(function(response) {
});
}
render(){
  return (
    <Button bsStyle="danger" bsSize="small" onClick={this.onClick}>
     <Link to={{pathname: '/', search: 'year='+this.state.year}} style={{ textDecoration: 'none' }}>
                  <span className="glyphicon glyphicon-remove"></span>
         </Link>
    </Button>
)
 }
}
export default Delete;
