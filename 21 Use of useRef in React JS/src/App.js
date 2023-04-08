import { useRef } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

import {
  Container
} from 'reactstrap';

function App() {
  const inputElement = useRef();
  const inputElement2 = useRef();

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value="Focus is here ";
    inputElement2.current.value="";
  };

  const focusInput2 = () => {
    inputElement2.current.focus();
    inputElement.current.value="";
    inputElement2.current.value="Focus is here ";
  };

  return (
    <><Container>
        <Header /><br /><br /><br /><br /><br /><br /><br /><br />

        <h1>Use of useRef to handle the element focus </h1>
        <input type="text" ref={inputElement} value="initial value 1" />
        <button className="btn btn-danger" onClick={focusInput}>Focus Input 1</button> <br /> 

        <input type="text" ref={inputElement2}  value="initial value 2"  />
        <button className="btn btn-primary" onClick={focusInput2}>Focus Input 2</button>
      </Container></>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;