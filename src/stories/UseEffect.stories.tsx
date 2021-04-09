import React, {useEffect, useState} from 'react';

export default {
    title: "UseEffect demo"
}

export const SimpleExamples = () => {
    console.log("SimpleExamples");
    const [count, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log("useEffect every render");
    });
    useEffect(() => {
        console.log("useEffect only first render -- componentDidMount");
    },[]);
    useEffect(() => {
        console.log("useEffect first render and every counter render");
    },[count]);

    return <>
        <div>
            <span>fake</span>
            <button onClick={() => setFake(fake + 1)}>+</button>
            <span>{fake}</span>
        </div>
        <div>
            <span>count</span>
            <button onClick={() => setCounter(count + 1)}>+</button>
            <span>{count}</span>
        </div>
    </>
}