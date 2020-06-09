import React from 'react';
import './App.css';
import AddName from './components/AddName';
import NamesList from './components/NamesList';

class App extends React.Component {
  state = {
    names: []
  }

  //add name to the list
  handleAddName = (name) => {
    name.length >= 1 ? this.setState({
      names: [...this.state.names, name]
    }) : alert('Please enter a name')
    
  }

  handleRandomize = () => {
    const array = this.state.names
    //Durstenfeld shuffle algorithm to shuffle the array
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
    this.setState({
      names: array
    })
  }

  //remove a name from the list with an 'x' button next to the name
  handleRemoveName = (name) => {
    const array = [...this.state.names];
    const index = array.indexOf(name)
    if (index !== -1) { 
      array.splice(index, 1); 
      this.setState({
        names: array
      })
    }

  }

  //clear all names
  handdleDeleteAll = () => {
    this.setState({
      names: []
    })
  }

  render() {
    return (
      <div className="App">
      <div id="wrapper">
        <h2>Name Shuffler</h2>
        <NamesList names={this.state.names} handleRemoveName={this.handleRemoveName}/>
        <AddName handleAddName={this.handleAddName}/>
        <button onClick={this.handleRandomize} className="bottom-button">Shuffle</button>
        <button onClick={this.handdleDeleteAll} className="bottom-button">Delete All</button>
      </div>
      </div>
    );
  }
  
}

export default App;
