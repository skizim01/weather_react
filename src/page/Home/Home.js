import React from "react";
import s from './Home.module.css'
import {ThisDay} from "./ThisDay/ThisDay";
import {ThisDayInfo} from "./ThisDayInfo/ThisDayInfo";
import {Days} from "./Days/Days";
import {Popup} from "../Popup/Popup";



export const Home = (props) => {
    return (<div >
        <div className={s.style}>
        <ThisDay/>
        <ThisDayInfo items={props.items}/>
    </div>
        <Days days={props.days} tabs={props.tabs}/>
    </div>)
}
