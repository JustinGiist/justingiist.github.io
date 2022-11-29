import { useState } from "react";
import CloseComponent from "../../../../components/CloseComponent/CloseComponent";
import Icon from "../../../../components/Icon/Icon";
import './VariationComponent.scss';

interface VariationProps {
}
const VariationComponent = (props: VariationProps) => {
    const [variation, setVariation] = useState<number>(1);
    const [variationsList, setVariationsList] = useState<number[]>([1]);
    const addVariation = () => {
        setVariationsList(prev => [...prev, prev.length + 1]);
        setVariation(variationsList.length + 1);
    }
    const removeVariation = (index: number) => {
        if (variationsList.length > 2) {
            setVariation(2);
            setVariationsList([1,2]);
        } else if (variationsList.length > 1) {
            setVariation(1);
            setVariationsList([1]);
        }
    }
    return (
        <div className='flex noWrap editor-variations subHeadlineBold'>
            <div className='subHeadlineBold textSubHeadline' data-tip={'This controls the ad variations for the editor. Hit the Plus to add a new variation.'}>Variation:</div>
            {variationsList.map(number => (
                <div 
                    key={`variation-${number}`}
                    className={'variation-option textSubBody' + (variation === number ? ' selected' : '')} 
                    onClick={() => variation === number ? null : setVariation(number)}
                >
                    {number !== 1 && <CloseComponent tiny action={() => removeVariation(number)}/>}
                    {number}
                </div>
            ))}
            {variationsList.length < 3 && (
                <div onClick={() => addVariation()} className="add-variation"><Icon icon='Plus' fontSize={20}/></div>
            )}
        </div>
    )
}
export default VariationComponent;