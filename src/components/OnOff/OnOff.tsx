import React from 'react';

type OnOffPropsType = {
    on: boolean
    onClick: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }
    const onClickHandler = (value: boolean) => {
        props.onClick(value);
    }
    return (
        <div>
            <div onClick={() => onClickHandler(true)} style={onStyle}>On</div>
            <div onClick={() => onClickHandler(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

