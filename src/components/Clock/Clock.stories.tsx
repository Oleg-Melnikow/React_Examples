import React from 'react';
import {Clock} from "./Clock";

export default {
    title: "Clock",
    component: Clock
}

export const BaseAnalogClock = () => {
    return <Clock mode="analog"/>
}

export const BaseDigitalClock = () => {
    return <Clock mode="digital"/>
}
