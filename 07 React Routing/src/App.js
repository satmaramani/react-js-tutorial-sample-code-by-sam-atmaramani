import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import CEOBlogs from "./pages/CEOBlogs";
import CTOBlogs from "./pages/CTOBlogs";
import CIOBlogs from "./pages/CIOBlogs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Header from "./Header";
import {
  Container
} from 'reactstrap';

export default function App() {
  return (
    <>
    <Container>
    
    <BrowserRouter>
      <Header /> <br /><br /><br /><br /><br /><br />
      <h1>React Routing </h1>
      <Routes  style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
            <Route index path="ctoblogs" element={<CTOBlogs />} />
            <Route path="ceoblogs" element={<CEOBlogs />} />
            <Route path="ctoblogs" element={<CTOBlogs />} />
            <Route path="cioblogs" element={<CIOBlogs />} />

          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </Container>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);