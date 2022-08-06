import Icon from "../../../components/Icon/Icon";
import { CombosMap } from "./FragmentsEnumsAndI";

const ComboList = () => {
    const alphabetized = Array.from( CombosMap ).sort(function([key, value], [keyb, valueb]){return key-keyb}).map(([key, value]) => (value));
    return (
        <div className="comboList">
            <h4 className="text-sub-headline">Combo Count: {alphabetized.length}</h4>
            {alphabetized.map((combo) => {
                return (
                    <div key={`combo-item-${combo.name}`} className="combo">
                        <h3>{combo.name}</h3>
                        <div className="comboLevel">{combo.level}</div>
                        <div className="comboDamage">{combo.damage}</div>
                        <div className="comboDescription">{combo.description}</div>
                        <div className="comboEffect"><Icon icon="Info"/><div className="comboEffectTooltip"><span/><h3>Effect</h3>{combo.effect}</div></div>
                    </div>
                );
            })}
        </div>
    )
}
export default ComboList;