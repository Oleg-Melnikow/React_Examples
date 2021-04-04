import React, {useState} from 'react';
import {Select} from "./Select";

export default {
    title: "Select stories",
    component: Select
}

export const BaseSelect = () => {

    const [value, setValue] = useState('2');

    return <>
        <Select value={value} onChange={setValue}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Kiev"},
                    {value: "3", title: "Moscow"},
                ]}/>
    </>
}

export const WithOutValueSelect = () => {

    const [value, setValue] = useState("");

    return <>
        <Select value={value} onChange={setValue}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Kiev"},
                    {value: "3", title: "Moscow"},
                ]}/>
    </>
}