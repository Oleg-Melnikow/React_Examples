import React from 'react';
import {UnControlledAccordion} from "./UnControlledAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: "UnControlledAccordion stories",
    component: UnControlledAccordion
}

const callback = action("accordion mode change event")

export const ChangeMode = () => {
    return <UnControlledAccordion  titleValue={"Menu"}/>
}