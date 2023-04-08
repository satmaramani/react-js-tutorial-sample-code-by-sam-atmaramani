import "../App.css";
import {useEffect, useState} from "react";

const Home = ()=>{

    const [dummy, setDummy] = useState();

    const btnClickHandler=()=>{
        setDummy("One")
    };

    const resetButtonValue =()=>{
        setDummy("Zero")
    }

    useEffect(() => {
        console.log("use Effect is called");
        console.log(process.env.REACT_APP_BASE_URL)
        alert("Use Effect is called when I reloaded the page OR clicked on the button ") 
      }, [dummy]);

    return <>
    This is the value of a Dummy variable : <font color='red'>{dummy}</font> <br /> <br /> <br /> <br />
    <button className="btn btn-danger" onClick={btnClickHandler}>Click to see useEffect Function flow </button>
    <button className="btn btn-secondary" onClick={resetButtonValue}>Reset Value </button>
    <div className="App-header">This is Home page </div></>
   
}

export default Home;