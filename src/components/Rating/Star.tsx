import React from 'react';
import {RatingValueType} from './Rating';

type StarPropsType = {
    selected: boolean
    callback: (ratingValue: RatingValueType) => void
    value: RatingValueType
}

export function Star(props: StarPropsType) {
    const onClickHandler = () => {
        props.callback(props.value);
    }
    return (
        <span onClick={onClickHandler}>{props.selected ? <b>Star</b> : 'Star'} </span>
    )
}

