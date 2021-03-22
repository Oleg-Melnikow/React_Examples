import React, {useState} from "react";

export function UnControlledRating() {

    const [value, setValue] = useState(0)

    function changeValue(value: number) {
        setValue(value)
    }

    return (
        <div>
            <Start selected={value > 0} value={1} changeValue={changeValue}/>
            <Start selected={value > 1} value={2} changeValue={changeValue}/>
            <Start selected={value > 2} value={3} changeValue={changeValue}/>
            <Start selected={value > 3} value={4} changeValue={changeValue}/>
            <Start selected={value > 4} value={5} changeValue={changeValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean,
    value: number,
    changeValue: (num: number) => void
}

function Start(props: StarPropsType) {
    return <span onClick={ () => props.changeValue(props.value) }>{props.selected ? <b>Star</b> : "Star"}</span>
}