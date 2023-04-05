//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos

import {Named} from "./Named";//import the Named component - see it is wrapped in curly brackets {Named}
import Defaultcomponent from "./Defaultcomponent";//import the Default component

const Parent = () => {
    
    
    return <>
        Proof :This Message is coming from Parent component <br />

        <Named />
        <Defaultcomponent />
    </>
}

export default Parent;