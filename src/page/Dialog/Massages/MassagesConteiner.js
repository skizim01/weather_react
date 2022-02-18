import React from "react";
import {Massage, Massages} from "./Massages";

export const MassagesConteiner = (props) =>{
    const getMassage_ = props.massage.map(m => <Massage text={m.massage}/>)

    const updateText_ = (text) => {
        props.dispatch({type:"UPDATE_MASSAGE", text:text})
    }
    const addMassage_ = () =>{
        props.dispatch({type:"ADD_MASSAGE"})
    }
    return <Massages updateText={updateText_}
                     addMassage={addMassage_}
                     getMassage={getMassage_}
                     nemMassageText={props.nemMassageText}



    />
}
