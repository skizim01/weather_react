import React from "react";
import s from "./Header.module.css"
import {GlobalSVGSelector} from "../../assets/icons/global/GlobalSVGSelector";
import Select, { StylesConfig } from 'react-select';


export const Header = (props) => {
    const options = [
        { value: 'city-1', label: 'Вінниця' },
        { value: 'city-2', label: 'Київ' },
        { value: 'city-3', label: 'Одеса' }
    ]

    const colourStyles = {
        control: (styles) =>({
            ...styles,
            backgroundColor: '#4793FF33',
            width: '194px',
            height: '37px',
            borderRadius: "10px",
            zIndex: 100,
            border: "none",

        })

    }
    return (<header>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSVGSelector id="header-logo"/>
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSVGSelector id="header-theme"/>
                </div>
                <Select styles={colourStyles}  defaultValue={options[0]} options={options} />


            </div>
        </header>
    )
}