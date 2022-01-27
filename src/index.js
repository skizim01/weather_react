import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {items} from "./state/state";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={items}/>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);
