import { AxiosInterceptor } from './axios'
import Home from "./pages/Home";

function App() {
  return (
    <>
    <h1>Powered by <font color='red'>TechySam</font></h1>
    
    <AxiosInterceptor>
    <Home />

    </AxiosInterceptor>
    </>
  );
}


export default App;