//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React , {useState} from "react";
import Header from "./Header";

import {
  Container
} from 'reactstrap';



function FormDisabledInputExample() {




  
  return (
    <><Container>
      <Header /><br /><br /><br /><br /><br /><br />

      <h1> How to use Forms in React JS </h1>
      <form>
      <Form.Group className="mb-3">
        <Form.Label>input</Form.Label>
        <Form.Control placeholder="input" type='text'/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> select menu</Form.Label>
        <Form.Select>
          <option> select</option>
          <option> 1</option>
          <option> 2</option>
          <option> 3</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this"  />
      </Form.Group>
      <Button className="btn btn-secondary" >Submit button</Button>
      </form>
      </Container></>
  );
}

export default FormDisabledInputExample;