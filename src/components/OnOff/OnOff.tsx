import React from 'react';

type OnOffPropsType = {
    value: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            <button className={'button ' + (props.value && 'on')}>On</button>
            <button className={'button ' + (!props.value && 'off')}>Off</button>
            <div className={'Radio ' + (props.value ? 'on' : 'off')}></div>
        </div>
    );
};