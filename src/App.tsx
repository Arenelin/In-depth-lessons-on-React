import React from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {PageTitle} from './PageTitle';

function App() {
    console.log('App rendering');
    return (
        <div>
            <PageTitle title="This is App component"/>
            Article 1
            <Rating value={1}/>
            <Accordion title="Menu"/>
            Article 2
            <Rating value={4}/>
            <Accordion title="What to learn"/>
        </div>
    );
}

export default App;
