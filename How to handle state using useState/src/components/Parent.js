//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos

import {useState} from "react";

const Parent = () => {
    
    const [title, setTitle] = useState("");

    //This function will be called on click of a button 
    const changeTitleHandler = () => 
    {
        setTitle("Title is changed");
    }

    return <>
        Proof : Below title will change after clicking on Below button  <br /> <br /> <br />

        Title :{title} <br /> <br /> <br />
        <button onClick={changeTitleHandler}>Click to change title value using State</button>
    </>
}

export default Parent;