import React, {useState} from "react";
import style from './OnOff.module.css'

export function OnOff() {

    let [on, setOn] = useState<boolean>(false)

    return (
        <div className={style.wrap}>
            <div className={`${style.block} ${on && style.green}`} onClick={() => setOn(true)}>On</div>
            <div className={`${style.block} ${!on && style.red}`} onClick={() => setOn(false)}>Off</div>
            <div className={`${style.circle} ${on ? style.green : style.red}`}/>
        </div>
    )
}