import React from 'react';
import {ClockViewPropsType, setCorrectDate} from './Clock';

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return(
        <>
            <span>{setCorrectDate(date.getHours())}</span>:
            <span>{setCorrectDate(date.getMinutes())}</span>:
            <span>{setCorrectDate(date.getSeconds())}</span>
        </>
    )
}
