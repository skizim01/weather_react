import React from "react";
import s from './ThisDayInfo.module.scss'
import {ThisDayItems} from "./ThisDayItems";
import cloud from "./../../../assets/imeges/cloud.png"

export const ThisDayInfo = (props) =>{
    console.log(props.state)
    const get_items = props.items.map(p => <ThisDayItems
        id={p.icon_id}
        name={p.name}
        value={p.value}/>)
    return(
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {get_items}
            <img className={s.cloud__img} src={cloud}/>
            </div>

    </div>)
}
