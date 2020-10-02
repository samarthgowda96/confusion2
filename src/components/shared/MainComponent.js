import React, { Component } from 'react';

import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './components/shared/Dishes'
import {descrip} from './components/shared/Dishes'
import {comment} from './components/shared/Dishes'
import DishDetailsComponent from './shared/DishDetailsComponent'
 
import './App.css';
 
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null 
     

      
      
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId  });

  }
render() {
  return (
    <div className="App">   
      <Navbar dark color="primary">
        <div className= "container">
          <NavbarBrand href='/'>Sammy's Ristorante</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/>
      <DishDetailsComponent dish={this.state.dishes.filter((dish)=> dish.id ===this.state.selectedDish)[0]}/>  
      
      
    </div>
  );
}
}

export default Main;
