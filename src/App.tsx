import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className={'App'}>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={switchOn} onClick={setSwitchOn}/>
        </div>
    );
}

export default App;