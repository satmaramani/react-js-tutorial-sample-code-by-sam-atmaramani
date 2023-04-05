import { useRef } from "react";
import ReactDOM from "react-dom/client";

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
    <>
      <h1>Powered by <font color='red'>TechySam</font></h1>
      <h1>Use of useRef to handle the element focus </h1>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input 1</button> <br /> 

      <input type="text" ref={inputElement2} />
      <button onClick={focusInput2}>Focus Input 2</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;