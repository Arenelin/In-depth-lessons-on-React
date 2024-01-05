import {UncontrolledAccordion} from './UncontrolledAccordion';

export default {
    component: UncontrolledAccordion
}

export const UncontrolledAccordionMenu = () => {
    return (
        <UncontrolledAccordion titleValue={'Menu'}/>
    )
}
export const UncontrolledAccordionUsers = () => {
    return (
        <UncontrolledAccordion titleValue={'Users'}/>
    )
}

export const UncontrolledAccordionCollapsedMode = ()=>{
    return (
        <UncontrolledAccordion titleValue={'Menu collapsed'} defaultCollapsed={true}/>
    )
}
export const UncontrolledAccordionUnCollapsedMode = ()=>{
    return (
        <UncontrolledAccordion titleValue={'Menu not collapsed'} defaultCollapsed={false}/>
    )
}