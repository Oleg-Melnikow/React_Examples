import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";

type PageTitlePropsType = {
    title: string
}

function App() {
    return (
        <div className="App">
            <PageTitle title="This App component"/>
            <Rating value={3}/>
            <Accordion titleValue="Menu" collapsed={false}/>
            <Rating value={1}/>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return <h2>{props.title}</h2>
}


export default App;
