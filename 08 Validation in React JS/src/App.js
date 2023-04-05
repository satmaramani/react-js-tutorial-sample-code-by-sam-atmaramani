import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React , {useState} from "react";

function ValidationExample() {

const [dummytext, setDummyText] = useState("");
const [dummydown, setDummydropdown] = useState("");

const submitHandler= (event)=>
{
    event.preventDefault();//using this statement because form should not relod - preventing default behaviour of a submit function

    if(dummytext.length===0 || dummytext === "" ){
      alert("Please enter some value ");
      return;
     }else{
      alert(" Your entered some value : Thank you ");
     }

    if(dummydown.length===0 || dummydown === "" || isNaN(dummydown)){
      alert(dummydown + " is not a number <br/>");
      return;
     }else{
      alert(dummydown + " is a number <br/>");
     }

     alert("This form is validated properly ")
     
  }

  //on change of a dropdown 
const selectHandler =(event)=>{
  console.log("You selected " +event.target.value)
  setDummydropdown(event.target.value);
}

//if you enter value in a text box it will display in the console 
const textHandler = (event)=>{
  console.log("You entered " +event.target.value)
  setDummyText(event.target.value)
}

  return (
    <>
      <h1>Powered by <font color='red'>TechySam</font></h1>
      <form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>input</Form.Label>
        <Form.Control placeholder="input" type='text' onChange={textHandler}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> select menu</Form.Label>
        <Form.Select onChange={selectHandler}>
          <option> select</option>
          <option> 1</option>
          <option> 2</option>
          <option> 3</option>
        </Form.Select>
      </Form.Group>
      
      <Button className="btn btn-secondary" onClick={submitHandler}>Submit button</Button>
      </form>
    </>
  );
}

export default ValidationExample;