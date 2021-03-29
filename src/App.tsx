import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import { UnControlOnOff } from './components/OnOff/UncontrolOnOff';
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";

type PageTitlePropsType = {
    title: string
}

function App() {

    let [on, setOn] = useState<boolean>(true);
    let [value, setValue] = useState<RatingValueType>(0);
    let [collapsed, setCollapsed] = useState<boolean>(false)

    function toggleHandler(){
        setCollapsed(!collapsed)
    }

    return (
        <div className="App">
            <PageTitle title="This App component"/>
            <Rating value={value} setValue={setValue} />
            <Accordion titleValue="Menu" collapsed={collapsed} toggleHandler={toggleHandler}/>
            <UnControlOnOff/>
            <UnControlledAccordion titleValue="Navigation"/>
            <OnOff on={on} setOn={setOn}/>
            <UnControlledRating/>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return <h2>{props.title}</h2>
}


export default App;
