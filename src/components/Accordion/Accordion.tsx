import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionMenu} from './AccordionMenu';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionMenu/>}
        </div>
    );
}