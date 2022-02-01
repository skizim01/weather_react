import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {days, items, tabs} from "./state/state";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./provider/ThemeProvider";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App state={items} days={days} tabs={tabs}/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
