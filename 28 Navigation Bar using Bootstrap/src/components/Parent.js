//Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos

import {useState} from "react";
import "../App";

const Parent = () => {
    
    const [name, setName] = useState("");

    const textHandler =()=> {
        console.log("This is text handler ");

    };

    const submitHandler =(event)=>{
        
        event.preventDefault();
        console.log("Form is submitted")
    }
    return <>
        <div className="div-info"> Use of Form  </div> <br /> <br /> <br />

        <form className="title-info">
            <fieldset >
                <div>
                    <label className="lable_class">Name </label>
                    <input type="text" className="input_class" onClick={textHandler}>{name}</input>
                </div>
                <div>
                    <label className="lable_class">Mobile number </label>
                    <input type="number" className="input_class"></input>
                </div>
            
                </fieldset>
            <button onClick={submitHandler}>Submit</button>
            
        </form>
    </>
}

export default Parent;