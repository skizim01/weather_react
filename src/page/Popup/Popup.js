import React from "react";
import s from "./Popup.module.scss"
import s2 from './../Home/ThisDay/ThisDay.module.scss'
import {ThisDayItems} from "../Home/ThisDayInfo/ThisDayItems";
import {GlobalSVGSelector} from "../../assets/icons/global/GlobalSVGSelector";


export const Popup = (props) => {
    const get_items = props.state.map(p => <ThisDayItems
        id={p.icon_id}
        name={p.name}
        value={p.value}/>)
    return (


        <div className={s.this__day_info}>
            <div className={s.left}>
                <div className={s.this__day}>
                    <div className={s.top__block}>
                        <div className={s.top__block_wrapper}>
                            <div className={s.this__temp}>20°</div>
                            <div className={s.this__day_name}>Сегодня</div>
                        </div>
                        <GlobalSVGSelector id="sun" />
                    </div>
                    <div className={s.bottom__block}>
                        <div className={s.this__time}>
                            Час: <span>21:54</span>
                        </div>
                        <div className={s.this__city}>
                            Місто: <span>Вінниця</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.right}>
            <div className={s.this__day_info_items}>
                {get_items}
            </div>

        </div>
        </div>)

}