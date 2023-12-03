import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating} from './Rating';
import {Accordion} from './Accordion';

function App() {
    return (
        <div>
            This is App component
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;
