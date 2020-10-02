import React, { Component } from 'react';

import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './components/MenuComponent';
import {DISHES} from './components/shared/Dishes'
import {descrip} from './components/shared/Dishes'
import {comment} from './components/shared/Dishes'
import './App.css';
 
class App extends Component {
  
      
   
  
render() {
  return (
    <div className='App' >   
        <Main/>

        </div>
      
      
  
  );
}
}

export default App