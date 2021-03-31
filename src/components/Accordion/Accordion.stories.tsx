import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: "Accordion stories",
    component: Accordion
}

const callback = action("accordion mode change event");
const onClickCallback = action("accordion item was clicked");

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    collapsed: true,
    titleValue: "Users",
    toggleHandler: callback
}

const items = [{title: "Den", value: 1}, {title: "Jack", value: 2}, {title: "Nick", value: 3}];

export const UnCollapsedMode = () => <Accordion collapsed={false} toggleHandler={callback} titleValue={"Menu"}
                                                items={items} onClick={onClickCallback}/>

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion collapsed={value} toggleHandler={() => setValue(!value)} titleValue={"Menu"} items={items}
                      onClick={onClickCallback}/>
}