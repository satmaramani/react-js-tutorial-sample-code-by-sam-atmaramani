//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos

import {useState} from "react";
import Child from "./Child";
import "../App";

const Parent = () => {
    
    const [title, setTitle] = useState("Empty Value");


    const fromParent = (fromChild) => {
        setTitle(fromChild);
    }

    return <>
        <div className="div-info"> Proof : Below title will change after clicking on Below button </div> <br /> <br /> <br />

        <div className="title-info"> Title supplied from Child :<b>{title} </b>


        <Child func={fromParent} />
        </div>
    </>
}

export default Parent;