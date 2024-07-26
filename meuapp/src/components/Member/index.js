import React, {Component} from "react";

class Member extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Visitor',
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(name) {
        this.setState({
            name: name
        });
    }

    logout = () => {
        this.setState({
            name: "Visitor"
        });
    }

    render() {
        return (
        <div>
            <h2>Welcome, {this.state.name}</h2>
            <button onClick={() => this.login('Cassio')}>Login</button>
            <button onClick={this.logout}>Logout</button>
            <p>{this.props.email}</p>
            <p>{this.props.admin ? "Admin" : "Not Admin"}</p>
        </div>
        );
    }
}

export default Member;
