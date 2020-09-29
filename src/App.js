import React, { Component } from 'react';

import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './components/shared/dishes'
import './App.css';
 
class App extends Component {
  constructor(props){
    super(props);
    console.log(DISHES)
    this.state = {
      dishes: DISHES
    };
  }
render() {
  return (
    <div className="App">   
      <Navbar dark color="primary">
        <div className= "container">
          <NavbarBrand href='/'>Sammy's Ristorante</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
      
      
    </div>
  );
}
}

export default App;
