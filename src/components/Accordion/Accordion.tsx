import React from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionMenu} from './AccordionMenu';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (accordionCollapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle onClick={() => props.onClick(!props.collapsed)} title={props.titleValue}/>
            {!props.collapsed && <AccordionMenu/>}
        </div>
    );
}