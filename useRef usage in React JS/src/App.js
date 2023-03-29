import React, {Fragment, useRef} from 'react';
 
function App() {
 
  // Creating a ref object using useRef hook
  const focusPoint = useRef(null);
  const focusPoint2 = useRef(null);
  const divRef = useRef("test");

  const onClickHandler = () => {
    focusPoint.current.value =
      "Button 1 Click - useRef used here to updated information";
      focusPoint.current.focus();
  };

  const onClickHandler2 = () => {
    focusPoint2.current.value =
      "Button 2 Click - useRef used here to updated information";
      focusPoint2.current.focus();
  };

  
  const onClickHandler3 = () => {
      divRef.current.value =
      "Button 2 Click - useRef used here to updated information";
  };

  return (
    <Fragment>
      <div>
        <button onClick={onClickHandler}>
         Button 1 Text Area Update
        </button>
        <button onClick={onClickHandler2}>
         Button 2 Text Area Update 
        </button>

        <button onClick={onClickHandler3}>
         Button 3 Text input Update 
        </button>


      </div>
      <label>
       Click on the action button to
       focus and populate the text.
      </label><br/>
      <textarea ref={focusPoint} row="100" cols="100" value="initial 1 "/> <br /> 

      <textarea ref={focusPoint2} row="100" cols="100" value="initial 2"/> <br /> 
      <input type="text" ref={divRef} value = "initial text value "/>
    </Fragment>
  );
};
 
export default App;