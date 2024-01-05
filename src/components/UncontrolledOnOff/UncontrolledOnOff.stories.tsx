import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
    component: UncontrolledOnOff
}

const callback = action('changed mode on or off');

export const OnMode = ()=>{
    return (
        <UncontrolledOnOff onChange={callback} defaultValueOn={true}/>
    )
}
export const OffMode = ()=>{
    return (
        <UncontrolledOnOff onChange={callback} defaultValueOn={false}/>
    )
}

export const UncontrolledOnOffStory = () => {
    return (
        <UncontrolledOnOff onChange={callback}/>
    )
}