import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    onChange: (switchOn: boolean) => void
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
    const [on, setOn] = useState(false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }
    const onClickHandler = (value: boolean) => {
        setOn(value);
        props.onChange(value);
    }

    return (
        <div>
            <div onClick={() => onClickHandler(true)} style={onStyle}>On</div>
            <div onClick={() => onClickHandler(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

