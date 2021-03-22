import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import { UnControlOnOff } from './components/OnOff/UncontrolOnOff';
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";

type PageTitlePropsType = {
    title: string
}

function App() {

    let [on, setOn] = useState<boolean>(false)

    return (
        <div className="App">
            <PageTitle title="This App component"/>
            <Rating value={3}/>
            <Accordion titleValue="Menu" collapsed={false}/>
            <Rating value={1}/>
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
