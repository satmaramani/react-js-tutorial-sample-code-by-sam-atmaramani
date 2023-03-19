//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos

import '../App.css';//import css and use it used btn class in this tutorial
const Child = (props) => {

    let child_value ="This value is sent from Child Component to Parent Component";

    const titleFromChild=()=>{
        props.func(child_value);
    };

    return <>
       
        <div className="child-div">Proof : This message is a Child Component </div><br />
        <button className="btn" onClick={titleFromChild}> Click here to send data from Child to Parent</button>
    </>
}

export default Child;