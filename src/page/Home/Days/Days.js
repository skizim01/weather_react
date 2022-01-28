import React from "react";
import s from "./Days.module.scss"
import {Card} from "./Card";
import {Tabs} from "./Tabs";


export const Days = (props) => {

    const get_days_info = props.days.map(i => <Card
        day={i.day}
        day_info={i.day_info}
        icon_id={i.icon_id}
        temp_day={i.temp_day}
        temp_night={i.temp_night}
        info={i.info}/>
    )
    const get_tabs = props.tabs.map(t => <Tabs value={t.value}/>
    )
    return (<div className={s.days}>
            <div className={s.tabs}>
                           {get_tabs}
                <div className={s.cancle}>
                    відмінити
                </div>

                    </div>
            <div className={s.get__days_info}>
                {get_days_info}
            </div>


        </div>

    )
}