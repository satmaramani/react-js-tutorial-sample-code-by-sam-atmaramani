///Author : Sampurna Atmaramani  
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos
import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";
// import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Powered by <font color='red'>TechySam</font></h1>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br /><br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw alert message when it reaches counter to 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
    </div>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
