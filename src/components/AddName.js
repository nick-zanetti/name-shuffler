import React from 'react'; 

//The handleAddName method in this component simply returns the OTHER handleAddName method passed down from the props, with the 'name' argument able to be added
class AddName extends React.Component {
  handleAddName = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    e.target.elements.name.value = ''
    return this.props.handleAddName(name)

  }

render() {
  return (
    <div>
      <form onSubmit = {this.handleAddName}>
       <input type="text" name="name" placeholder="Enter name to add..." id="name-input" autoFocus></input><button className="bottom-button">Add Name</button>
      </form>
    </div>
  )
} 
}


export default AddName

  