import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Header from "./Header";

import {
  Container
} from 'reactstrap';

export default function App() {

  

   return (
    <><Container>
    <BrowserRouter>
    <Header /><br /><br /><br /><br /><br /><br /><br /><br />

    <h1> Use of Async and Await in React JS </h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Container></>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);