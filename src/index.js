import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./state/store-redux";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./provider/ThemeProvider";
import {Provider} from "react-redux";

const renderPage = (state) => {
    // console.log(ThemeProvider)
    ReactDOM.render(
        <React.StrictMode>
            <ThemeProvider>
            <BrowserRouter>

                    <App state={state} dispatch={store.dispatch}/>
            </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderPage(store)
store.subscribe(() => {
        renderPage(store.getState())
    })
