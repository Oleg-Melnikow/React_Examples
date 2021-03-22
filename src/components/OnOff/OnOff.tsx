import React from "react";
import style from './OnOff.module.css'

type PropsType = {
    on: boolean,
    setOn: (on: boolean) => void
}

export function OnOff(props: PropsType) {

    return (
        <div className={style.wrap}>
            <div className={`${style.block} ${props.on && style.green}`} onClick={() => props.setOn(true)}>On</div>
            <div className={`${style.block} ${!props.on && style.red}`} onClick={() => props.setOn(false)}>Off</div>
            <div className={`${style.circle} ${props.on ? style.green : style.red}`}/>
        </div>
    )
}