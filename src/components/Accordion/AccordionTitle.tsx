import React from 'react';

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.onClick()
    }
    return <h3 onClick={onClickHandler}>{props.title}</h3>;
}

