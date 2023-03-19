import "../App.css";
import { useState, useEffect } from 'react';

const Home = () => {
   const [posts, setPosts] = useState([]);
   const [flag, setFlag] = useState(false);

   const AysncFunction = async function ()
   {
      let datafetch ="";
      datafetch = await fetch('https://jsonplaceholder.typicode.com/posts');

      let resp = "";
      resp = await datafetch.json();

      console.log(resp)
      await setPosts(resp);
      setFlag(true);
   }


   const displayData =(sample) =>{
    let textSample =  <div className='margin10'><b><li>{sample.title}</li></b></div>;
    return textSample;
   }

   //used below useEffect function to display data on the page load itself
   useEffect(()=>{AysncFunction()}, [flag]);

   return (
      <>
      <button onClick={AysncFunction}>Click here to load data From Server</button>
      <div className='margin10'>{!flag && <div>.. Loading From Server </div>} 
        {flag===true &&  <ol><i>Below Info is fetched from Server  using Async Await function method</i> {posts.map(displayData)}</ol>}
      </div>
      </>
   );
};

export default Home;