import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionMenu} from './AccordionMenu';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!collapsed && <AccordionMenu/>}
            <button onClick={() => setCollapsed((prevState) => !prevState)}>Toggle</button>
        </div>
    );
}