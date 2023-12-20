import React from 'react';

type StarPropsType = {
    selected: boolean,
}

export function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>Star</b> </span>
    }
    return (
        <span>Star </span>
    );
}

