//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos

import {useState} from "react";

const StateDemo = () => {
    
    //we need first variable is parameter and second variable is fuction 
    //function is required to update the state value - here function name is setTitle
    //you can give any name as per your choice
    //there can be multiple useState function calls 

    const [title, setValue] = useState("Proof");
    const [title2, setValue1] = useState("");

   
    //This function will be called on click of a button 
    const changeTitleHandler = () => 
    {
        setValue("10");
        setValue1("Second value");
    }

    const setToDefault = () => 
    {
        setValue("{Empty Value}");
        setValue1("Empty second value");
    }

    return <>
        Proof : Below title will change after clicking on Below button  <br /> <br /> <br />

        Title : <b><font color='red'>{title} this is title 2  </font></b>{title2}<br /> <br /> <br />
        <button className="btn btn-danger" onClick={changeTitleHandler}>Click to change title value using State</button> <br /> <br /> <br />

        <button  className="btn btn-primary"  onClick={setToDefault}>Set State value to Default empty</button>
    </>
}

export default StateDemo;