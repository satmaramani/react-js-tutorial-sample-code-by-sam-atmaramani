// helloReact/src/bootstrap.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createBrowserHistory } from 'history'

const mount = (el) => {
    const history = createBrowserHistory()

    ReactDOM.render(
        <App history={history} />,
        el
    )
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#hello-react-dev-app')
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }
