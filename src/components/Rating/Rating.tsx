import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType,
    setValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {

    let {value, setValue} = props

    return (
        <div>
            <Star selected={value > 0} value={1} setValue={setValue}/>
            <Star selected={value > 1} value={2} setValue={setValue}/>
            <Star selected={value > 2} value={3} setValue={setValue}/>
            <Star selected={value > 3} value={4} setValue={setValue}/>
            <Star selected={value > 4} value={5} setValue={setValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean,
    value: RatingValueType,
    setValue: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {

    function changeValue() {
        props.setValue(props.value)
    }

    return <span onClick={changeValue}>{props.selected ? <b>Star</b> : "Star"}</span>
}