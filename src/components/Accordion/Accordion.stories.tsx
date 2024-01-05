import type {StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from 'react';


export default {
    component: Accordion,
};
type Story = StoryObj<typeof Accordion>;

const onChangeCallback = () => {
    console.log('hey hey');
}
export const FirstStory: Story = {
    args: {
        titleValue: 'Users',
        collapsed: true,
        onClick: () => {
        }
    }
}
export const SecondStory: Story = {
    args: {
        titleValue: 'Menu',
        collapsed: false,
        onClick: onChangeCallback
    }
}

const onChangeHandler = action('accordion mode change event fired');

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'} collapsed={true} onClick={onChangeHandler}/>
}
export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'} collapsed={false} onClick={(onChangeHandler)}/>
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);

    return <Accordion titleValue={'Demo Accordion'} collapsed={collapsed} onClick={setCollapsed}/>
}
