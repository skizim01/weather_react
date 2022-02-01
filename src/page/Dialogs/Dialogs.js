import React from "react";
import s from './Dialogs.module.scss'

 const Dialogs = (props) =>{
    return(<div className={s.style} >
        <Dialog/>
        <Massages/>
    </div>)
}

export default Dialogs
