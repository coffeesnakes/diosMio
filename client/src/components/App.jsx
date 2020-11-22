import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import List from './List.jsx';
import Form from './Form.jsx';
import ListItem from '.'
/*This is the main App component that reflect all inner components' work.  */
//Each inner component makes up the App component which creates the formatted state that will be
//displayed in index.html after it's rendered.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: null,
      }
      this.addGrocery = this.addGrocery.bind(this);
    }
 componentDidMount() {
   this.setState({
     groceries: list,
   })
 }
 addGrocery(grocery) {
   // takes in multiple args with ... and sets a new state to
   // an updated version with the additonal grocery
   //
   this.setState [...this.state.groceries, grocery]
 }
  render() {
 return (
  <div>
    <Header/>
    <Form addGrocery={this.addGrocery}/>
    <List groceries={this.state.groceries}/>
  </div>
 )
 }

};
// exports the App so other files can interact
export default App;