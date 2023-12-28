import React from 'react';

type StarPropsType = {
    selected: boolean
    callback: () => void

}

export function Star(props: StarPropsType) {
    const onClickHandler = () => {
        props.callback()
    }

    // return (
    //     props.selected
    //         ? <span onClick={onClickHandler}><b>Star</b> </span>
    //         : <span onClick={onClickHandler}>Star </span>
    // )

    return (
        <span onClick={onClickHandler}>{props.selected ? <b>Star</b> : 'Star'} </span>
    )
}