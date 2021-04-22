import React, {useEffect, useState} from 'react';
import { DigitalClockView } from './DigitalClockView';
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: "analog" | "digital";
}


export type ClockViewPropsType = {
    date: Date,
}

export const setCorrectDate = (date: number) => {
    return date > 9 ? date : `0${date}`
}


export const Clock: React.FC<PropsType> = (props) => {

    let [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000);
    })

    return (
        <div>
            {props.mode === "digital" ?
                <DigitalClockView date={date}/>:
                <AnalogClockView date={date}/>
            }
        </div>
    )
}