import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: "Accordion stories",
    component: Accordion
}

const callback = action("accordion mode change event")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    collapsed: true,
    titleValue: "Users",
    toggleHandler: callback
}

export const UnCollapsedMode = () => <Accordion collapsed={false} toggleHandler={callback} titleValue={"Menu"}/>

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion collapsed={value} toggleHandler={()=>setValue(!value)} titleValue={"Menu"}/>
}