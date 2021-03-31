import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
}

export const UnControlledInput = () => <input type="text"/>;

export const TrackValueOfUnControlledInput = () => {
    const [value, setValue] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <>
        <input type="text" onChange={onChange}/> - {value}
    </>
}

export const GetValueOfUnControlledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    function save() {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input type="text" ref={inputRef}/>
        <button onClick={save}>save</button>
        actual value: - {value}
    </>
}

export const ControlledInput = () => {
    const [value, setValue] = useState("")

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value)
    }

    return <input type="text" value={value} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState(false)

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={value} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>("2")

    function onChange(e: ChangeEvent<HTMLSelectElement>) {
        setValue(e.currentTarget.value)
    }

    return <select value={value} onChange={onChange}>
        <option value="1">Minsk</option>
        <option value="2">Kiev</option>
        <option value="3">Warsaw</option>
    </select>
}