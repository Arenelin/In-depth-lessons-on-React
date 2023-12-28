import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontolledOnOff/UncontrolledOnOff';
import {Accordion} from './components/Accordion/Accordion';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(false);

    return (
        <div className={'App'}>
            {/*<PageTitle title="This is App component"/>*/}
            {/*Article 1*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<UncontrolledAccordion titleValue="Menu" collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={4}/>*/}
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>

            {/*<OnOff/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledRating/>*/}


            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={on} onClick={setOn}/>
            <UncontrolledOnOff/>

        </div>
    );
}

export default App;