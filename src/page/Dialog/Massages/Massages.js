import React, {createRef} from "react";
import s from "../MonthStatistics.module.css"



export const Massages = (props) =>{
    const getMassage = props.getMassage
    const ref = createRef()
    const updateText = () => {
       props.updateText(ref.current.value)
    }
    const addMassage = () =>{
       props.addMassage()
    }

    return<div className={s.massages}>
       <div className={s.massage}>
           {getMassage}
       </div>
        <div className={s.input}>
            <textarea ref={ref}
                      onChange={updateText}
            value={props.nemMassageText}/>
            <button onClick={addMassage}>send</button>
        </div>
    </div>
}
export const Massage = (props) => {
    return<div>{props.text}</div>
}
