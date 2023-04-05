import "../App.css";
import {useEffect, useState} from "react";

const Home = ()=>{

    const [dummy, setDummy] = useState();

    const btnClickHandler=()=>{
        setDummy("1")
    };

    useEffect(() => {
        console.log("use Effect is called");
        console.log(process.env.REACT_APP_BASE_URL)
        alert("Use Effect is called when I clicked on the button ") 
      }, [dummy]);

    return <><button onClick={btnClickHandler}>Click to see useEffect Function flow </button>
    <div className="App-header">This is Home page </div></>
   
}

export default Home;