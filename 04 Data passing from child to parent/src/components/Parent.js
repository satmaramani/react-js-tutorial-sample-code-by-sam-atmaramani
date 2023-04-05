//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos

import {useState} from "react";
import Child from "./Child";

const Parent = () => {
    
    const [title, setTitle] = useState("Empty Value");


    const fromParent = (fromChild) => {
        setTitle(fromChild);
    }

    return <>
        Proof : Below title will change after clicking on Below button  <br /> <br /> <br />

        Title supplied from Child :<b>{title}</b> <br /> <br /> <br />

        <Child func={fromParent} />
    </>
}

export default Parent;