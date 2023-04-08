///Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos
//YouTube Handle : TechySam

import './App.css';
import SomeOtherName from "./components/Parent"; //import the parent component - This is Default component
import Header from "./Header";
import {
  Container
} from 'reactstrap';

function App() {
  return (
    <>
    <Container >
      <div className="App">
        <Header /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1>Named and Default Export</h1>
        <SomeOtherName /> 
      </div>
    </Container>
    </>
  );
}

export default App;

//Note - SomeOtherName component is exported as Parent from /components/Parent.js but here it is imported as SomeOtherName
