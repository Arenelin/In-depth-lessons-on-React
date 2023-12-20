import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionMenu} from './AccordionMenu';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle callback={() => setCollapsed(!collapsed)} title={props.titleValue}/>
            {!collapsed && <AccordionMenu/>}
        </div>
    );
}