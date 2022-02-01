import React from "react";
import s from './../Dialogs.module.scss'

export const Massage = (props) =>{
    return(
        <div>
            <div className={s.massages}>

            </div>
            <div className={s.add__massage}>
                <textarea/>
                <button></button>
            </div>
        </div>
    )
}
