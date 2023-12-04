import React from 'react';

type PageTitlePropsType = {
    title: string,
}

export function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering');
    return <h1>{props.title}</h1>;
}

