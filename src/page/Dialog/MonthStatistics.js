import React from "react";
import s from './MonthStatistics.module.css'
import {Dialog} from "./Dialog/Dialog";
import {MassagesConteiner} from "./Massages/MassagesConteiner";

const MonthStatistics = (props) => {
    console.log(props)

    const dialogs = props.state.dialog.map(d => <Dialog name={d.name}/>)

    return (<div className={s.dialogs}>
        {dialogs}
        <MassagesConteiner massage={props.state.massages}
                 nemMassageText={props.state.newMassageText}
                  dispatch={props.dispatch}/>
    </div>)
}

export default MonthStatistics
