import {RatingValueType} from '../Rating/Rating';
import React from 'react';

type StarProps = {
    selected: boolean
    callback: (ratingValue: RatingValueType) => void
    value: RatingValueType
}

export const Star: React.FC<StarProps> = (props) => {
    const {selected, callback, value} = props;
    const onClickHandler = () => {
        callback(value);
    }
    return (
        <span onClick={onClickHandler}>{selected ? <b>Star</b> : 'Star'} </span>
    )
}