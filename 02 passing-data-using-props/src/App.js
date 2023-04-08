//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos
//YouTube Handle : TechySam

import './App.css';
import Parent from "./components/Parent"; //import the parent component
import Header from "./Header";
import {
  Container
} from 'reactstrap';

function App() {
  return (
    <>
    <Container >
    <div className="App">
      <Header title="Passing Data using Props" /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1>Passing Data using Props</h1>
      <Parent />
    </div>
    </Container>
    </>
  );
}

export default App;
