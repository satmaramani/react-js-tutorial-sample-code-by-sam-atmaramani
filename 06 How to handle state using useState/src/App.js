///Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos

import './App.css';
import StateDemo from "./components/Parent"; //import the parent component - This is Default component
import Header from './Header';

import {
  Container
} from 'reactstrap';

function App() {
  return (
    <>
    
    <Container>
      
    <div className="App">
    
      <Header /> <br /><br /><br /><br /><br /><br /><br /><br /><br />

      <h1>Handle State using useState</h1>
      <StateDemo />
      
    </div>
    </Container></>
  );
}

export default App;
