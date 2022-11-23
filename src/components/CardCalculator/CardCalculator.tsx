import { useCallback, useMemo, useState } from "react";
import PageLayout, { iPageLayout, mapInitialFormData } from "../PageLayout/PageLayout";
import { InputTypes } from "../PageLayout/SwitchInput";
import './CardCalculator.scss';

enum CardValues {
    zero = 32,
    one = 11,
    two = 12,
    three = 13,
    four = 14,
    five = 15,
    six = 16,
    seven = 18,
    eight = 24,
    nine = 32,
    healthPotion = 14,
    catSwiftPotion = 16
}
const initialCardValues = {
    zero: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    healthPotion: 0,
    catSwiftPotion: 0
};
const getValueFromKey = (key: string) => Object.keys(CardValues).filter(x => x === key)[0];
const formInputs = (cardData: any) => Object.keys(initialCardValues).map((key: string) => ({
    id: key,
    field: key,
    type: InputTypes.number,
    min: 0,
    max: 4,
    label: (
        <div className="flex noWrap">
            <h5 style={{ textTransform: 'capitalize', minWidth: 60 }}>{CardValues[key as any]} = {cardData[key as any] * parseInt(CardValues[key as any])}</h5>
            <h4 style={{ textTransform: 'capitalize', minWidth: 160 }}>{key}</h4>
        </div>
    )
}));

const cardPageLayout = (cardData: any) => ({
    id: 'card-calculator',
    label: 'Card Calculator',
    className: 'background-transparent',
    inputs: formInputs(cardData),
    layoutClassName: 'flexFull'
});
const CardCalculator = () => {
    const [cardData, setCardData] = useState<any>(mapInitialFormData(cardPageLayout(initialCardValues), initialCardValues));

    const memoizedPageLayout = useMemo(() => cardPageLayout(cardData), [cardData]);
    const total = useMemo(() => {
        let resultTotal = 0;
        let deckCount = 0;
        Object.keys(cardData).forEach((key: string) => {
            const value = parseInt(CardValues[key as any]);
            resultTotal += cardData[key] * value;
            deckCount += parseInt(cardData[key]);
        });
        return (
            <div className="flex noWrap">
                <h2>{resultTotal} / {500 - resultTotal} remaining</h2>
                <h5>Card Count: {deckCount}</h5>
            </div>
        );
    },[cardData]);

    return (
        <div className="card-calculator-container flexColumn">
            {<PageLayout pageLayout={memoizedPageLayout} formData={cardData} handleFormData={setCardData} />}
            {total}
        </div>
    );
}
export default CardCalculator;