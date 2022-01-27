import React from "react";
import s from './ThisDayInfo.module.css'
import {ThisDayItem} from "./ThisDayItem";


export const ThisDayInfo = (props) =>{
    let get_info = props.state.map(i => <ThisDayItem id={i.icon_id}
                                                     name={i.name}
                                                     value={i.value}/>)
    return(<div className={s.style}>

    </div>)
}