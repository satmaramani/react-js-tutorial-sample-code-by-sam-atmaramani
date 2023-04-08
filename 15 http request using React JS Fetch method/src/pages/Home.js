import "../App.css";
import { useState, useEffect } from 'react';

const Home = () => {
   const [posts, setPosts] = useState([]);
   const [flag, setFlag] = useState(false);

   const fetchData = () => {
    setPosts([]);
    setFlag(false);
    alert("Array is Emptied, again requesting to server :  check Network Tab")

    const getDataFromServer = 
        () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
             .then((res) => res.json())
             .then((data) => {
                console.log(data);
                setPosts(data);
                setFlag(true);
             })
             .catch((err) => {
                console.log(err.message);
             });
          }
    
    //using setTimeOut to just show that request is again went to server and getting response
    setTimeout(getDataFromServer, "4000");//1 second delay purposely 
   }

   

   const displayData =(sample) =>{
    console.log(sample.title);
    let textSample =  <div className='margin10'><b><li>{sample.title}</li></b></div>;
    return textSample;
   }

   //used below useEffect function to display data on the page load itself
   useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/posts')
   .then((res) => res.json())
   .then((data) => {
      console.log(data);
      setPosts(data);
      setFlag(true);
   })
   .catch((err) => {
      console.log(err.message);
   });}, [flag]);

   return (
      <>
      <button className="btn btn-danger" onClick={fetchData}>Click here to load data From Server</button>
      <div className='margin10'>{!flag && <div>.. Loading From Server </div>} 
        {flag===true &&  <ol><i>Below Info is fetched from Server</i> {posts.map(displayData)}</ol>}
      </div>
      </>
   );
};

export default Home;