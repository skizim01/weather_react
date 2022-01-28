import React from "react";
import s from './Days.module.scss'


export const Tabs = (props) =>{
    return(<div className={s.tab}>
            {props.value}
        </div>

    )
}