import React from 'react';

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.callback()}>{props.title}</h3>;
}

