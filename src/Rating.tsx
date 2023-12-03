import React from 'react';
import {Star} from './Star';
import App from './App';

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


