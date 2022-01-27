import React from "react";
import s from './Home.module.css'
import {ThisDay} from "./ThisDay/ThisDay";
import {ThisDayInfo} from "./ThisDayInfo/ThisDayInfo";



export const Home = (props) => {
    return (<div className={s.style}>
        <ThisDay/>
        <ThisDayInfo state={props.state}/>
    </div>)
}