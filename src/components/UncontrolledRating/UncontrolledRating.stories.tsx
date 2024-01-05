import {UncontrolledRating} from './UncontrolledRating';
import {action} from '@storybook/addon-actions';

export default {
    component: UncontrolledRating
}

const callback = action('changed rating');

export const UncontrolledRatingEmpty = () => {
    return (
        <UncontrolledRating onChange={callback}/>
    )
}

export const UncontrolledRatingWithDefaultValue1 = () => {
    return (
        <UncontrolledRating defaultValue={1} onChange={callback}/>
    )
}
export const UncontrolledRatingWithDefaultValue2 = () => {
    return (
        <UncontrolledRating defaultValue={2} onChange={callback}/>
    )
}
export const UncontrolledRatingWithDefaultValue3 = () => {
    return (
        <UncontrolledRating defaultValue={3} onChange={callback}/>
    )
}
export const UncontrolledRatingWithDefaultValue4 = () => {
    return (
        <UncontrolledRating defaultValue={4} onChange={callback}/>
    )
}
export const UncontrolledRatingWithDefaultValue5 = () => {
    return (
        <UncontrolledRating defaultValue={5} onChange={callback}/>
    )
}