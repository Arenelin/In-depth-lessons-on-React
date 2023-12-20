import React from 'react';

type StarPropsType = {
    selected: boolean
    callback: () => void

}

export function Star(props: StarPropsType) {

    return (
        props.selected
            ? <span onClick={() => props.callback()}><b>Star</b> </span>
            : <span onClick={() => props.callback()}>Star </span>
    )
}