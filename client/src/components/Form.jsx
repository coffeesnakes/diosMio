import React from 'react';
// form should work throughout the app because of the class extension.
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      quantity: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
// this uses method uses object key assignment, therefore you don't need a handle
//method for both name, and quantity
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
      // [event.target.quantity]: event.target.value
    })
  }
  //onSubmit lets you submit by hitting enter (baked in code) where as
  //onClick you have the ability to use enter in your field but must click to render input
  //onClick would be ideal for longer submissions where you would need the use of
  // the enter key  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    // event.preventDefault();
  }
  // QUESTION: Do I need to use componentDidMount to handle new data before rendering?

  render () {
    return (
      <div>
      <form>
        <label> Name:
           <input name="item" onChange={this.handleChange} value={this.state.item} />
        </label>
        <label>quantity
          <input name="quantity" value={this.state.quantity} />
        </label>
          <button onSubmit={this.handleSubmit}>Add Grocery</button>
      </form>
      </div>
    )
  }
}


export default Form