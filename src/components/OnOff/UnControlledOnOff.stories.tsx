import React, {useState} from 'react';
import {UnControlOnOff} from "./UncontrolOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: "UnControlOnOff stories",
    component: UnControlOnOff
}

const callback = action("on or of clicked")

export const OnMode = () => <UnControlOnOff/>
export const OffMode = () => <UnControlOnOff/>


export const ChangeMode = () => {
    return <UnControlOnOff />
}