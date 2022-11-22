import { useCallback, useEffect, useRef, useState } from 'react';
import './Rainimation.scss';

function removeAllChildNodes(parent: any) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const Rainimation = () => {
    const frontRow = useRef<any>(null);
    const backRow = useRef<any>(null);
    const [frontDrops, setFrontDrops] = useState<string>('');
    const [backDrops, setBackDrops] = useState<string>('');
    const makeItRain = useCallback(() => {
        if (frontRow && backRow && frontRow.current && backRow.current) {
            removeAllChildNodes(frontRow.current);
            removeAllChildNodes(backRow.current);

            var increment = 0;
            var drops = "";
            var backDrops = "";

            while (increment < 100) {
                //couple random numbers to use for various randomizations
                //random number between 98 and 1
                var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
                //random number between 5 and 2
                var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
                //increment
                increment += randoFiver;
                //add in a new raindrop with various randomizations to certain CSS properties
                drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
                backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
            }
            setFrontDrops(drops);
            setBackDrops(backDrops);
        }
    }, [
        frontRow, 
        backRow
    ]);
    useEffect(() => {
        if (frontRow && backRow && frontRow.current && backRow.current) {
            makeItRain();
        }
    }, [
        frontRow, 
        backRow, 
        makeItRain
    ]);
    return (
        <>
            <div ref={frontRow} className="rain front-row" dangerouslySetInnerHTML={{ __html: frontDrops }} />
            <div ref={backRow} className="rain back-row" dangerouslySetInnerHTML={{ __html: backDrops }}  />
        </>
    )
}
export default Rainimation;