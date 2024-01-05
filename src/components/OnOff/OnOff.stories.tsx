import {OnOff} from './OnOff';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    component: OnOff
}

const callback = action('on or off clicked')

export const OnMode = () => {
    return (
        <OnOff on={true} onClick={callback}/>
    )
}
export const OffMode = () => {
    return (
        <OnOff on={false} onClick={callback}/>
    )
}
export const SwitchMode= () => {
    const [value, setValue] = useState(true);
    return (
        <OnOff on={value} onClick={setValue}/>
    )
}