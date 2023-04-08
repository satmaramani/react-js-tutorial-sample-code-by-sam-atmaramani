import React, { Component } from 'react';
import './App.css';
import Counter from './component/counter'
import Header from "./Header";
import {
   Container
 } from 'reactstrap';

class App extends Component {
   render() {
      return (
         <><Container>
         <div className = "App">
         {/* <Header /><br /><br /><br /><br /><br /><br /><br /><br /> */}

         <h1> State Management using Redux in React JS </h1>
            <header className = "App-header">
               <Counter/>
            </header>
         </div>
         </Container></>
      );
   }
}
export default App;