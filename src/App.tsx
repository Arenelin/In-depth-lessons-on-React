import React from 'react';
import './App.css';
import {Rating} from './Rating';
import {Accordion} from './Accordion';
import {AppTitle} from './AppTitle';

function App() {
    console.log('App rendering');
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;
