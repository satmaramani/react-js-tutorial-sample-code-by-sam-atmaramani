//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos


#Install bootstrap by using following command in your application 


    npm install react-bootstrap bootstrap



#Sample inclusions 

#Option 1 
    import Button from 'react-bootstrap/Button';

#Option 2
    import { Button } from 'react-bootstrap';


#Import other components if needed 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


#Below code you can copy paste in your render function 


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


Thats its,you have used bootstrap CSS on this page 
