import "../App.css";
import { Link } from 'react-router-dom'


const BlogsLinks = ()=>{
    return <>
    <div className="App-header">This is the <font color='red'>BlogsLinks.js File </font>
        <div><Link to="/ceoblogs" >CEO Blogs </Link></div>
        <div><Link to="/ctoblogs" >CTO Blogs </Link></div>
        <div><Link to="/cioblogs" >CIO Blogs </Link></div>
        </div>
    </>
}

export default BlogsLinks;