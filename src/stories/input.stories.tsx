import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
}

export const UnControlledInput  = () => <input type="text"/>;

export const TrackValueOfUnControlledInput  = () => {
    const [value, setValue] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <>
        <input type="text" onChange={onChange}/> - {value}
        </>
}

export const GetValueOfUnControlledInputByButtonPress  = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    function save(){
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input type="text" ref={inputRef}/>
        <button onClick={save}>save</button> actual value: - {value}
    </>
}
