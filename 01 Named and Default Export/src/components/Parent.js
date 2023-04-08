//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos
//YouTube Handle : TechySam

import {Named} from "./Named";//import the Named component - see it is wrapped in curly brackets {Named}
import Defaultcomponent from "./Defaultcomponent";//import the Default component

const Parent1 = () => {
    
    
    return <>
        Proof :This Message is coming from <b>Parent</b> component <br />

        <Named />
        <Defaultcomponent />
    </>
}

const Parent = () => {
    
    
    return <>
        Proof :This Message is coming from <b>Parent</b> component <br />

        <Named />
        <Defaultcomponent />
    </>
}

export default Parent;

//Parent component is exported by Default, see the default keyword above 
//Hence you can import by any name and use wherever you are importing this statement 
//ex. import SomeOtherName from "./Parent"