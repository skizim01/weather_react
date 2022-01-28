import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {days, items, tabs} from "./state/state";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={items} days={days} tabs={tabs}/>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);
