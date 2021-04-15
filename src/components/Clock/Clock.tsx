import React, {useEffect, useState} from 'react';

type PropsType = {}


export const Clock: React.FC<PropsType> = (props) => {

    let [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000);
    })
    const setCorrectDate = (date: number) => {
        return date > 9 ? date : `0${date}`
    }

    return (
        <div>
            <span>{setCorrectDate(date.getHours())}</span> :
            <span>{setCorrectDate(date.getMinutes())}</span> :
            <span>{setCorrectDate(date.getSeconds())}</span>
        </div>
    )
}