import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionMenu} from './AccordionMenu';

type UncontrolledAccordionPropsType = {
    titleValue: string
    defaultCollapsed?:boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const {titleValue, defaultCollapsed}= props;
    const [collapsed, setCollapsed] = useState(defaultCollapsed? defaultCollapsed : false);
    return (
        <div>
            <AccordionTitle callback={() => setCollapsed(!collapsed)} title={titleValue}/>
            {!collapsed && <AccordionMenu/>}
        </div>
    );
}