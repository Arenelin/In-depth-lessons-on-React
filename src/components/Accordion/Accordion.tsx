import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionMenu} from './AccordionMenu';

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
}

export function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <AccordionTitle title={props.titleValue}/>
        );
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionMenu/>
        </div>
    );
}