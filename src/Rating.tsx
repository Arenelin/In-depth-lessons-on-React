import React from 'react';
import {Star} from './Star';

export function Rating() {
    console.log('Rating rendering');
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}


