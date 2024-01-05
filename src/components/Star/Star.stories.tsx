import {Star} from './Star';
import {action} from '@storybook/addon-actions';

export default {
    component: Star
}

const callback = action('star changed active or inactive mode')

export const StarActive = ()=>{
    return (
        <Star value={1} selected={true} callback={callback}/>
    )
}
export const StarInactive = ()=>{
    return (
        <Star value={5} selected={false} callback={callback}/>
    )
}