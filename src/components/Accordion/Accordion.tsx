import React from 'react';

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    toggleHandler: () => void,
    items: ItemType[],
    onClick: (value: number) => void
}

type AccordionTitlePropsType = {
    title: string,
    toggleHandler: () => void
}

export type AccordionBodyPropsType = {
    items: ItemType[],
    onClick: (value: number) => void
}

type ItemType = {
    title: string,
    value: number
}

export function Accordion(props: AccordionPropsType) {

    let {collapsed, toggleHandler, titleValue} = props

    return (
        <div>
            <AccordionTitle title={titleValue} toggleHandler={toggleHandler}/>
            {!collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <>
        <h3 onClick={props.toggleHandler}>{props.title}</h3>
    </>
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <>
        <ul>
            {props.items.map(el => <li key={el.value} onClick={() => props.onClick(el.value)}>{el.title}</li>)}
        </ul>
    </>
}