//Author : Sampurna Atmaramani 
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos

import Child from "./Child";//import the child component

const Parent = () => {
    const propTitle = "This is PropTitle";
    const propObject = {
        "key" : "value",
        "key1" : "value1"
    };
    
    return <>
        Proof :This Message is coming from Parent component <br />

        <Child title={propTitle} obj = {propObject}/>
    </>
}

export default Parent;