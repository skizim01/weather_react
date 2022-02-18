import React from "react";
import {Home} from "./page/Home/Home";
import {Routes, Route} from "react-router-dom";
import {Header} from "./page/Header/Header";
import "./style/index.scss"
import MonthStatistics from "./page/Dialog/MonthStatistics";
import {Popup} from "./page/Popup/Popup";


function App(props) {
    console.log(props)
    return (
        <div>
            {/*<Popup state={props.state}/>*/}
            <div className='App'>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home items={props.state.weatherReducer.items}
                                                   days={props.state.weatherReducer.days}
                                                   tabs={props.state.weatherReducer.tabs}/>}/>
                    <Route path="/monthstatistics"
                           element={<MonthStatistics
                               state={props.state.dialogsReducer}
                               dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
        </div>);
}

export default App;
