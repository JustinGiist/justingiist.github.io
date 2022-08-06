import Icon from "../Icon/Icon";
import './CloseComponent.scss';

interface CloseComponentProps {
    action: () => void;
    tiny?: boolean;
}
const CloseComponent = (props: CloseComponentProps) => {
    return (
        <div className={`closePositioner ${props.tiny ? 'tiny' : ''}`}>
            <div className={`close`} onClick={() => props.action()}>
                <Icon icon='Close' fontSize={props.tiny ? 12 : 24}/>
            </div>
        </div>
    )
}
export default CloseComponent;