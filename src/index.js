import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import Store from './Components/Redux/Store'


let Root=ReactDom.createRoot(document.getElementById("root"));

Root.render(
    <Provider store={Store}>
            <App />
    </Provider>
)