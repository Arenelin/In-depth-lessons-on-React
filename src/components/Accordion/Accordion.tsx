import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionMenu} from './AccordionMenu';

type AccordionPropsType = {
    title: string,
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionMenu/>
        </div>
    );
}

