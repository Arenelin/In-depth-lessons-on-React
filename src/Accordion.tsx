import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionMenu} from './AccordionMenu';

export function Accordion() {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle/>
            <AccordionMenu/>
        </div>
    );
}

