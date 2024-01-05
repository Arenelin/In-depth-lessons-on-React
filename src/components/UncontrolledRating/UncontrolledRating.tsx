import React, {useState} from 'react';
import {Star} from '../Star/Star';
import {RatingValueType} from '../Rating/Rating';

type UncontrolledRatingProps = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UncontrolledRating: React.FC<UncontrolledRatingProps> = (props) => {
    const {defaultValue, onChange} = props;
    const [value, setValue] = useState<RatingValueType>(defaultValue ? defaultValue : 0);
    const onChangeRating = (ratingValue: RatingValueType) => {
        setValue(ratingValue);
        onChange(ratingValue);
    }
    return (
        <div>
            <Star value={1} callback={onChangeRating} selected={value > 0}/>
            <Star value={2} callback={onChangeRating} selected={value > 1}/>
            <Star value={3} callback={onChangeRating} selected={value > 2}/>
            <Star value={4} callback={onChangeRating} selected={value > 3}/>
            <Star value={5} callback={onChangeRating} selected={value > 4}/>
        </div>
    )
}