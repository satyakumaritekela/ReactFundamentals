import React from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char';

class App extends React.Component{
  state = {
    inputValue: ''
  }

  changeListner = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  removeHandler = (index) => {
    let ipValue = this.state.inputValue.split('');
    ipValue.splice(index, 1)
    ipValue = ipValue.join('');
    this.setState({
      inputValue: ipValue
    })
  }

  render() {

    const charList = this.state.inputValue.split('').map((char, index) => {
      return <Char char={char} key={index} click={(index) => {this.removeHandler(index)}}/>
    });

    return (
      <div className="App">
        <input type="text" onChange={this.changeListner} value={this.state.inputValue}></input>
        <p>Length of input text: {this.state.inputValue.length}</p>
        <Validation inputText={this.state.inputValue} />
        {charList}
      </div>
    );    
  }
}

export default App;
