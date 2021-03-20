import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title="This App component"/>
            <Rating value={3}/>
            <Accordion title="Menu"/>
            <Rating value={1}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <h2>{props.title}</h2>
}


export default App;
