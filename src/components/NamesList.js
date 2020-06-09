import React from 'react'; 

class NamesList extends React.Component {

  handleRemoveName = (e) => {
    e.preventDefault()
    var nameToRemove = e.target.name //'target' refers to the button in our case
    return this.props.handleRemoveName(nameToRemove)
  }

  render() {
    return ( 
      
      <ol>{this.props.names.map((name, index) => 
      <div key={index} className="individual-name-container">
        <li key={index}>{name}</li>  
        <button name={name} onClick={this.handleRemoveName} className="remove-buttons">x</button>
      </div>
       )}</ol>
    )
  }

}

export default NamesList