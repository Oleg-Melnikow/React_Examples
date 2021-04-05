import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSE} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string,
    toggleHandler: () => void
}

export function UnControlledAccordion(props: AccordionPropsType) {

    //let [collapsed, setCollapsed] = useState<boolean>(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    const toggleHandler = () => dispatch({type: TOGGLE_COLLAPSE})

    return (
        <div>
            <AccordionTitle title={props.titleValue} toggleHandler={toggleHandler}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <>
        <h3 onClick={props.toggleHandler}>{props.title}</h3>
    </>
}

function AccordionBody() {
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}