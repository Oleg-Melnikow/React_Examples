import React, {useState} from 'react';

export default {
    title: "UseState demo"
}

function generateData(){
    console.log("generateData")
    return 1
}

export const Examples = () => {
    console.log("UseState")
    const [count, setCounter] = useState(generateData);

    return <>
        <button onClick={() => setCounter(count => count + 1)}>+</button>
        {count}
    </>
}