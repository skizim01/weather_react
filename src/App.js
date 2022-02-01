import React from "react";
import {Home} from "./page/Home/Home";
import {Routes, Route} from "react-router-dom";
import {Header} from "./page/Header/Header";
import s from "./style/index.scss"
import Dialogs from "./page/Dialogs/Dialogs";


function App(props) {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home state={props.state}
                                               days={props.days}
                                               tabs={props.tabs}/>}/>
                <Route path="/monthstatistics" element={<Dialogs/>}/>
            </Routes>
        </div>
    );
}

export default App;
