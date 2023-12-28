import React from 'react';

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.callback()
    }

    return <h3 onClick={onClickHandler}>{props.title}</h3>;
}