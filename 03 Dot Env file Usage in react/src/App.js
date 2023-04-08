import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Header from "./Header";
import {
  Container
} from 'reactstrap';

export default function App() {

  

   return (
    <>
    <Container >
    <Header title="Usage of Dot env (.env) file" /><br /><br /><br /><br /><br /><br /><br /><br />
    <h1>Usage of Dot env (.env) file </h1>

    This value is coming from <b>.env.local</b> file <br /> Key = <b> REACT_APP_BASE_URL</b> <br /> Value <b>{process.env.REACT_APP_BASE_URL}</b>
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Container>
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);