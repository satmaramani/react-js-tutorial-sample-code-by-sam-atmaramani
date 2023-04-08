import "../App.css";
import {useEffect, useState} from "react";

const Home = ()=>{

    const [dummy, setDummy] = useState();

    const btnClickHandler=()=>{
        setDummy("1")
    };

    useEffect(() => {
        console.log("This is reading from environment value ");
        console.log(process.env.REACT_APP_BASE_URL)
        alert("This is reading from environment value " + process.env.REACT_APP_BASE_URL) 
      }, [dummy]);

    return <><button className="btn btn-danger" onClick={btnClickHandler}>Click to see useEffect Function flow </button><br />
    <div className="App-header">This is Home page </div>
    </>
}

export default Home;