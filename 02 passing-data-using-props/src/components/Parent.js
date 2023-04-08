//Author : Sampurna Atmaramani 
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos
//YouTube Handle : TechySam

import Child from "./Child";//import the child component
import {ChildDestructure} from "./Child";

const Parent = () => {
    const propTitle = "This is PropTitle";
    
    const propObject = {
        "key" : "Combined props value",
        "key1" : "Combined props value1"
    };


    const propTitleDestructured = "This is Destructured Title";

    const propObjectDestructured = {
        "key" : "Destructured value",
        "key1" : "Destructured value1"
    };
    
    return <>
        Proof :This Message is coming from Parent component <br />

        <Child title={propTitle} obj = {propObject}/>
        <ChildDestructure  title={propTitleDestructured} obj = {propObjectDestructured}/>
    </>
}

export default Parent;