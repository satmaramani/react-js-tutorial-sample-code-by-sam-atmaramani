import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';

import UserForm from "./UserForm";


test("it shows two buttons and a input", ()=>{
    //render the component 
    render(<UserForm />)

    //manipulate the component or find an element in it 
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');




    //Asserion - make sure the component is doing what we intend it to do 

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();

})


test("it calls onUserAdd when the form is submitted", ()=>{

    const argList = [];

    const callback = (...args) => {
        argList.push(args);
    }
    //Try to render my component s
    render (<UserForm onUserAdd={callback}/>)

    //Find the two inputs 
    const [nameInput, emailInput] = screen.getAllByRole("textbox");

    //simute typing in a name input field
    user.click(nameInput);
    user.keyboard("Sam");

    //simulate typing in an email 
    user.click(emailInput);
    user.keyboard("sam@gmail.com");

    //find the button 
    const button = screen.getByRole("button");

    //simulate clicking the button 
    user.click(button);


    //assertion to make sure onUserAdd is called with email / name 
    expect(argList).toHaveLength(1);
    expect(argList[0][0]).toEqual({name:'Sam', email:"sam@gmail.com"});

})


test("Use of Mock Function", ()=>{

    const mock = jest.fn();
    //Try to render my component s
    render (<UserForm onUserAdd={mock}/>)

    //Find the two inputs 
    const nameInput = screen.getByRole("textbox", {
        name : /name/i
    })

    const emailInput = screen.getByRole("textbox", {
        name : /email/i
    })

    //simute typing in a name input field
    user.click(nameInput);
    user.keyboard("jane");

    //simulate typing in an email 
    user.click(emailInput);
    user.keyboard("sam@gmail.com");

    //find the button 
    const button = screen.getByRole("button");

    //simulate clicking the button 
    user.click(button);


    //assertion to make sure onUserAdd is called with email / name 
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name: "jane", email:"sam@gmail.com"})

})