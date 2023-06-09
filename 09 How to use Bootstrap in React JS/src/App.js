
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React , {useState} from "react";
import Header from "./Header";
import {
  Container
} from 'reactstrap';

function FormDisabledInputExample() {

const [dummytext, setDummyText] = useState("");
const [dummydown, setDummydropdown] = useState("");

const submitHandler= (event)=>{
    event.preventDefault();
    console.log("You selected dropdown value " + dummydown);
    console.log("You Entere textvalue " + dummytext);

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

const resetHandler = ()=>{
  
  setDummyText('');
  setDummydropdown('');
}

  return (
    <>
      <Container>
      <Header /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1> How to use Bootstrap in React JS</h1>
        <form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>input</Form.Label>
          <Form.Control placeholder="input" type='text' onChange={textHandler} value={dummytext}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> select menu</Form.Label>
          <Form.Select onChange={selectHandler}  >
            <option value={dummydown}> select</option>
            <option> 1</option>
            <option> 2</option>
            <option> 3</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Can't check this"  />
        </Form.Group>
        <Button className="btn btn-danger" onClick={submitHandler}>Submit button</Button>
        <Button className="btn btn-secondary" onClick={resetHandler}>Reset Values</Button>
        </form>
      </Container>
      </>
  );
}

export default FormDisabledInputExample;