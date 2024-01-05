import React from 'react';
import {Star} from '../Star/Star';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType = {
    value: RatingValueType
    onClick: (ratingValue: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star callback={props.onClick} value={1} selected={props.value > 0}/>
            <Star callback={props.onClick} value={2} selected={props.value > 1}/>
            <Star callback={props.onClick} value={3} selected={props.value > 2}/>
            <Star callback={props.onClick} value={4} selected={props.value > 3}/>
            <Star callback={props.onClick} value={5} selected={props.value > 4}/>
        </div>
    )
}


