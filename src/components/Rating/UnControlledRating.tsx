import React, {useState} from "react";

export function UnControlledRating() {

    const [value, setValue] = useState(0)

    return (
        <div>
            <Start selected={value > 0} value={1} setValue={setValue}/>
            <Start selected={value > 1} value={2} setValue={setValue}/>
            <Start selected={value > 2} value={3} setValue={setValue}/>
            <Start selected={value > 3} value={4} setValue={setValue}/>
            <Start selected={value > 4} value={5} setValue={setValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean,
    value: 1 | 2 | 3 | 4 | 5,
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Start(props: StarPropsType) {
    function changeValue(){
        props.setValue(props.value)
    }
    return <span onClick={changeValue}>{props.selected ? <b>Star</b> : "Star"}</span>
}