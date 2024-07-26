import React, { Component } from 'react';
import Feed from './components/Feed';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: 1, username: 'Mathew', likes: 10, comments: 2},
        {id: 2, username: 'Mark', likes: 120, comments: 52},
        {id: 3, username: 'Luke', likes: 200, comments: 20},
        {id: 4, username: 'John', likes: 500, comments: 100},
      ]
    };
  }

  render() {
    return (
      <div>
        
        {this.state.feed.map((item) => {
          return (
            <Feed key={item.id} username={item.username} likes={item.likes} comments={item.comments} />
          );
        })}

      </div>
    );
  }
}

export default App;