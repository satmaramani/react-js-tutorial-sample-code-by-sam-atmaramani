import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../src/reducer/index'
import App from '../src/App'
import './index.css';
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__()
)
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
   <Provider store = {store}>
      <App />
   </Provider>, document.getElementById('root')
)