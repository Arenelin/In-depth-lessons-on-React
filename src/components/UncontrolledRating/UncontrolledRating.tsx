import React, {useState} from 'react';
import {Star} from '../Star/Star';


export function UncontrolledRating() {
    const [value, setValue] = useState(0);
    return (
        <div>
            <Star value={1} callback={setValue} selected={value > 0}/>
            <Star value={2} callback={setValue} selected={value > 1}/>
            <Star value={3} callback={setValue} selected={value > 2}/>
            <Star value={4} callback={setValue} selected={value > 3}/>
            <Star value={5} callback={setValue} selected={value > 4}/>
        </div>
    )
}


