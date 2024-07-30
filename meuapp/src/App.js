import React, { Component } from 'react';
import './style.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {sentence: ''};
    this.sentences = [
      'Do not be afraid of competition.',
      'An exciting opportunity lies ahead of you.',
      'You love peace.',
      'Get your mind set…confidence will lead you on.',
      'You will always be surrounded by true friends.',
      'Sell your ideas-they have exceptional merit.',
      'You should be able to undertake and complete anything.',
      'You are kind and friendly.',
      'You are wise beyond your years.',
      'Your ability to juggle many tasks will take you far.',
      'A routine task will turn into an enchanting adventure.',
      'Beware of all enterprises that require new clothes.',
      'Be true to your work, your word, and your friend.',
      'Goodness is the only investment that never fails.',
      'A journey of a thousand miles begins with a single step.',
      'Forget injuries; never forget kindnesses.',
      'Respect yourself and others will respect you.',
      'A man cannot be comfortable without his own approval.',
      'Always do right. This will gratify some people and astonish the rest.',
      'It is easier to stay out than to get out.',
      'Sing everyday and chase the mean blues away.',
      'You will receive money from an unexpected source.',
      'Attitude is a little thing that makes a big difference.',
      'Plan for many pleasures ahead.',
      'Experience is the best teacher.',
      'You will be happy with your spouse.',
      'Expect the unexpected.',
      'Stay healthy. Walk a mile.',
      'The family that plays together stays together.',
      'Eat chocolate to have a sweeter life.',
      'Once you make a decision the universe conspires to make it happen.',
      'Make yourself necessary to someone.',
      'The only way to have a friend is to be one.',
      'Nothing great was ever achieved without enthusiasm.',
      'Dance as if no one is watching.',
      'Live this day as if it were your last.',
      'Your life will be happy and peaceful.',
      'Reach for joy and all else will follow.',
      'Move in the direction of your dreams.',
      'Bloom where you are planted.',
      'Appreciate. Appreciate. Appreciate.',
      'Happy News is on its way.',
    ];

    this.openCookie = this.openCookie.bind(this);
  }

  openCookie(){
    let state = this.state;
    let number = Math.floor(Math.random() * this.sentences.length);
    state.sentence = this.sentences[number];
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <img src={require('./assets/biscoito.png')} alt="Fortune Cookie" />
        <Button name="Open cookie" clickButton={this.openCookie}/>
        <h3 className='sentenceText'>{this.state.sentence}</h3>
      </div>
    );
  }

}

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.clickButton}>{this.props.name}</button>
    );
  }
}

export default App;