import React, {Component} from "react";

class Feed extends Component {
    render() {
        return (
        <div key={this.props.id}>
            <h3>{this.props.username}</h3>
            <p>{this.props.likes} likes / {this.props.comments} comments</p>
            <hr/>
        </div>
        );
    }
}

export default Feed;