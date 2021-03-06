import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/customer/'+this.props.match.params.id)
      .then(res => {
        this.setState({ customer: res.data });
        console.log(this.state.customer);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('http://localhost:8080/customer/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="main-container">
          <div className="panel-heading">
              Customer Details
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Customer List</Link></h4>
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.customer.name}</dd>
              <dt>Address:</dt>
              <dd>{this.state.customer.address}</dd>
              <dt>City:</dt>
              <dd>{this.state.customer.city}</dd>
              <dt>Postal Code:</dt>
              <dd>{this.state.customer.postalCode}</dd>
              <dt>Phone Number:</dt>
              <dd>{this.state.customer.phone}</dd>
            </dl>
            <Link to={`/edit/${this.state.customer.id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.customer.id)} className="btn btn-danger">Delete</button>
          </div>
      </div>
    );
  }
}

export default Show;