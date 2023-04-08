//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos
import {useState} from "react";

import '../App.css';//import css and use it used btn class in this tutorial
const Child = (props) => {

    let child_value ="";

    const [val, setVal] = useState("");

    const titleFromChild=()=>{
        let child_value ="This value is sent from Child Component to Parent Component";

        setVal(child_value)
        props.func(child_value);//this props.fun is sent from parent component and we are wrapping child_value parameter to parent 
    };

    const resetValue = ()=>{
        child_value = "";
        setVal("{empty string}")
        props.func(child_value);//this props.fun is sent from parent component and we are wrapping child_value parameter to parent 
    }

    return <>
       
       <h1>This is a child component </h1>
        Proof : This message is from a Child Component - value <b>{val}</b><br /><br /><br />
        <button className="btn btn-danger" onClick={titleFromChild}> Click here to send data from Child to Parent</button><br /><br />

        <button className="btn btn-primary" onClick={resetValue}> Reset the data to empty string </button>
    </>
}

export default Child;