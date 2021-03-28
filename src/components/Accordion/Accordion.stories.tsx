import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: "Accordion stories",
    component: Accordion
}

const callback = action("accordion mode change event")

export const CollapsedMode = () => <Accordion collapsed={true} toggleHandler={callback} titleValue={"Users"}/>
export const UnCollapsedMode = () => <Accordion collapsed={false} toggleHandler={callback} titleValue={"Menu"}/>

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion collapsed={value} toggleHandler={()=>setValue(!value)} titleValue={"Menu"}/>
}