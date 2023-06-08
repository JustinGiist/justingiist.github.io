import React from 'react';
import './Tile.scss';

const Tile = ({
    topSection,
    middleSection,
    bottomSection,
    overlay,
    ...rest
}: any) => (
    <div className={`tile ${rest?.className}`}>
        {topSection && (
            <div className="tile-top">
                {topSection}
            </div>
        )}
        {middleSection && (
            <div className="tile-middle">
                {overlay && (
                    <div className="tile-overlay">
                        {overlay}
                    </div>
                )}
                {middleSection}
            </div>
        )}
        {bottomSection && (
            <div className="tile-bottom">
                {bottomSection}
            </div>
        )}
    </div>
);
export default Tile;
