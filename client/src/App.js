import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/customer')
            .then(res => {
                this.setState({ customers: res.data });
                console.log(this.state.customers);
            });
    }

    render() {
        return (
            <div className="main-container">
                <div className="panel-heading">
                    CUSTOMER CRUD
                </div>
                <div className="panel-body">
                    <div className="prim-btn" onClick={()=> this.props.history.push('/create')}>
                        {/* <Link to="/create"> */}
                            Add Customer
                            {/* </Link> */}
                    </div>
                    <table className="table table-stripe">
                        <thead>
                            <tr>
                                <th>Nama Customer</th>
                                <th>Alamat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.customers.map(cust =>
                                <tr>
                                    <td><Link to={`/show/${cust.id}`}>{cust.name}</Link></td>
                                    <td>{cust.address}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
