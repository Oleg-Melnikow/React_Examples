import React from 'react';

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    toggleHandler: () => void
}

type AccordionTitlePropsType = {
    title: string,
    toggleHandler: () => void
}

function Accordion(props: AccordionPropsType) {

    let {collapsed, toggleHandler, titleValue} = props

    return (
        <div>
            <AccordionTitle title={titleValue} toggleHandler={toggleHandler}/>
            {!collapsed && <AccordionBody/>}
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

export default Accordion;