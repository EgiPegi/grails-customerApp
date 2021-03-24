import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      postalCode: '',
      phone: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, address, city, postalCode, phone } = this.state;

    axios.post('http://localhost:8080/customer', { name, address, city, postalCode, phone })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, address, city, postalCode, phone } = this.state;
    return (
      <div className="main-container">
          <div className="panel-heading">
              CREATE CUSTOMER
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Customer List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="isbn">Name:</label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div className="form-group">
                <label for="title">Address:</label>
                <input type="text" className="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div className="form-group">
                <label for="author">City:</label>
                <input type="text" className="form-control" name="city" value={city} onChange={this.onChange} placeholder="City" />
              </div>
              <div className="form-group">
                <label for="published_date">Postal Code:</label>
                <input type="number" className="form-control" name="postalCode" value={postalCode} onChange={this.onChange} placeholder="Postal Code" />
              </div>
              <div className="form-group">
                <label for="publisher">Phone:</label>
                <input type="tetx" className="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <button type="submit" className="prim-btn">Submit</button>
            </form>
          </div>
      </div>
    );
  }
}

export default Create;