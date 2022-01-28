import React from "react";
import s from "./ThisDayInfo.module.scss"
import {IndicatorSvgSelector} from "../../../assets/icons/global/IdentificatorSvgSelector";

export const ThisDayItems = (props) => {


    return (
            <div className={s.this__day_item}>
            <div className={s.this__day_icon}>
                <IndicatorSvgSelector id={props.id}/>
            </div>
            <div className={s.this__day_name}>
                {props.name}
            </div>
            <div className={s.this__day_value}>
                {props.value}
            </div>
        </div>)

}