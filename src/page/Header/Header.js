import React, {useEffect, useState} from "react";
import s from "./Header.module.scss"
import {GlobalSVGSelector} from "../../assets/icons/global/GlobalSVGSelector";
import Select, {StylesConfig} from 'react-select';
import {useTheme} from "../../hooks/useTheme";
import {Theme, ThemeContext} from "../../context/ThemeContext";
import {NavLink} from "react-router-dom";


export const Header = (props) => {
    const options = [
        {value: 'city-1', label: 'Вінниця'},
        {value: 'city-2', label: 'Київ'},
        {value: 'city-3', label: 'Одеса'}
    ]
    const theme = useTheme()
    const changeThemes = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT
            ? theme.theme = "dark"
            : theme.theme = "light")
    }
    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.LIGHT ? "#4793FF33" : '#4F4F4F',
            width: '194px',
            height: '37px',
            borderRadius: "10px",
            zIndex: 100,
            border: "none",
            color: "var(#{--text-color-default})",

        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme.theme === Theme.LIGHT ? "#000" : '#fff',
        })
    }



    return(
        <header>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSVGSelector id="header-logo"/>
                </div>
                <div className={s.title}>React weather</div>
                <NavLink to='monthstatistics'>dialog</NavLink>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeThemes}>
                    <GlobalSVGSelector id="change-theme"/>
                </div>
                <Select styles={colourStyles}
                        defaultValue={options[0]}
                        options={options}/>


            </div>
        </header>)

}
