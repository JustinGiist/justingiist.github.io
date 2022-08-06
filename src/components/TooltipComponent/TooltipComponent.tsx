import './TooltipComponent.scss';
interface TooltipComponentProps {
    children: any;
    tooltip: any[];
    className?: string;
    style?: any;
    direction?: string;
    type?: string;
    label?: string;
}
const TooltipComponent = (props: TooltipComponentProps) => {
    return (
        <div className={`tooltipContainer ${props.className}`}>
            <div style={props.style} className={`tooltipContent ${props.direction ?? 'left'} ${props.type ?? 'info'} ${props.label ? 'hasLabel' : ''}`}>
                {props.label && <div className='tooltipLabel bodyBold textSubHeadline'>{props.label}</div>}
                {props.tooltip.map((tip) => props.label ? <li key={tip} className='tooltip'>{tip}</li> : <div key={tip} className='tooltip'>{tip}</div>)}
            </div>
            {props.children}
        </div>
    );
};
export default TooltipComponent;