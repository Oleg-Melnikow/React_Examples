import React from "react";
import style from './OnOff.module.css'

type PropsType = {
    on: boolean,
    setOn: (on: boolean) => void
}

export function OnOff(props: PropsType) {

    function onHandler(){
        props.setOn(true)
    }

    function offHandler(){
        props.setOn(false)
    }

    return (
        <div className={style.wrap}>
            <div className={`${style.block} ${props.on && style.green}`} onClick={onHandler}>On</div>
            <div className={`${style.block} ${!props.on && style.red}`} onClick={offHandler}>Off</div>
            <div className={`${style.circle} ${props.on ? style.green : style.red}`}/>
        </div>
    )
}