import React from "react";
import s from './Days.module.scss'
import {GlobalSVGSelector} from "../../../assets/icons/global/GlobalSVGSelector";


export const Card = (props) =>{
    return(<div className={s.card}>
            <div className={s.day}>
                {props.day}
            </div>
            <div className={s.day__info}>
                {props.day_info}
            </div>
            <div className={s.icon__id}>
                <GlobalSVGSelector id ={props.icon_id}/>
            </div>
            <div className={s.temp__day}>
                {props.temp_day}
            </div>
            <div className={s.temp__night}>
                {props.temp_night}
            </div>
            <div className={s.info}>
                {props.info}
            </div>
        </div>

    )
}