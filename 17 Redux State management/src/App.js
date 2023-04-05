import React, { Component } from 'react';
import './App.css';
import Counter from './component/counter'
 
class App extends Component {
   render() {
      return (
         <div className = "App">
            <h1>Powered by <font color='red'>TechySam</font></h1>
            <header className = "App-header">
               <Counter/>
            </header>
         </div>
      );
   }
}
export default App;