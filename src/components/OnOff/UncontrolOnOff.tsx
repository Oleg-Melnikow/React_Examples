import React, {useState} from "react";
import style from './OnOff.module.css'

export function UnControlOnOff() {

    const [open, setOpen] = useState(false)

    function handlerClickOn() {
        setOpen(true)
    }

    function handlerClickOff() {
        setOpen(false)
    }

    return (
        <div className={style.wrap}>
            <div className={`${style.block} ${open && style.green}`} onClick={handlerClickOn}>On</div>
            <div className={`${style.block} ${!open && style.red}`} onClick={handlerClickOff}>Off</div>
            <div className={`${style.circle} ${open ? style.green : style.red}`}/>
        </div>
    )
}