import "../App.css";
import { useState, useEffect } from 'react';
import axios from "axios";//using Axios Method 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Home = () => {

   axios.interceptors.request.use(
      config => {
        const token = "TechySam"
        if (token) {
          config.headers['Authorization'] = 'Bearer ' + token
        }
        console.log(" I am inside interceptor code : Sending Bearer Token with all the requests ")
        // config.headers['Content-Type'] = 'application/json';
        return config
      },
      error => {
        Promise.reject(error)
      }
    )



    //below is response interceptor example 

    axios.interceptors.response.use(
      response => {

         console.log("This is TechySam Response")
         console.log(response);
        return response
      },
      function (error) {
        console.log(error)
      }
    )

   const [posts, setPosts] = useState([]);
   const [flag, setFlag] = useState(false);

   const fetchData = () => {
    setPosts([]);
    setFlag(false);
    alert("Array is Emptied, again requesting to server :  check Network Tab")

    const getDataFromServer = 
        () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
             .then((res) => res.json())
             .then((data) => {
               //  console.log(data);
                setPosts(data);
                setFlag(true);
             })
             .catch((err) => {
                console.log(err.message);
             });
          }
    
    //using setTimeOut to just show that request is again went to server and getting response
    setTimeout(getDataFromServer, "1000");//1 second delay purposely 
   }

   

   const displayData =(sample, index) =>{
   //  console.log(sample.title);
    let textSample =  <div className='margin10' key={index}><b><li >{sample.title}</li></b></div>;
    return textSample;
   }

   //used below useEffect function to display data on the page load itself
   useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/posts')
   .then((res) => res.json())
   .then((data) => {
      // console.log(data);
      setPosts(data);
      setFlag(true);
   })
   .catch((err) => {
      console.log(err.message);
   });}, [flag]);

   return (
      <Container className="bg-primary text-white mb-3">
         
         <Row><Button className="btn btn-danger bg-warning col-sm-4 offset-4" onClick={fetchData}>Click here to load data From Server </Button></Row>
         <div className='margin10'>{!flag && <div>.. Loading From Server using Axios Method </div>} 
         {flag===true &&  <ol><i>Below Info is fetched from Server using Axios Method </i> {posts.map(displayData)}</ol>}
         </div>
      </Container>
   );
};

export default Home;