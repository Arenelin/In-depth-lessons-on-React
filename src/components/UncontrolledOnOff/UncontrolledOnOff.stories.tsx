import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
    component: UncontrolledOnOff
}

const callback = action('changed mode');
export const UncontrolledOnOffStory = () => {
    return (
        <UncontrolledOnOff onChange={callback}/>
    )
}