import React, {useState} from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {PageTitle} from './PageTitle';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    return (
        <div>
            {/*<PageTitle title="This is App component"/>*/}
            {/*Article 1*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<UncontrolledAccordion titleValue="Menu" collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={4}/>*/}
            {/*<UncontrolledAccordion titleValue="What to learn" collapsed={true}/>*/}
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
            <UncontrolledRating/>
        </div>
    );
}

export default App;