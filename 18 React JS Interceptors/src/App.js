import { AxiosInterceptor } from './axios'
import Home from "./pages/Home";
import Header from "./Header";

import {
  Container
} from 'reactstrap';

function App() {
  return (
    <><Container>
    <Header /><br /><br /><br /><br /><br /><br /><br /><br />

    <h1> React JS Interceptors </h1>
    
    <AxiosInterceptor>
    <Home />

    </AxiosInterceptor>
    </Container></>
  );
}


export default App;