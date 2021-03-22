import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string,
    toggleHandler: () => void
}

function UnControlledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState<boolean>(false)

    function toggleHandler(){
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} toggleHandler={toggleHandler}/>
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

export default UnControlledAccordion;