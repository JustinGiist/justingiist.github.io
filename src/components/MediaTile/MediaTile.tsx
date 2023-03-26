import React from 'react';
import './MediaTile.scss';

interface MediaTileProps {
    topSection?: any;
    middleSection?: any;
    bottomSection?: any;
    overlay?: any;
}
const MediaTile = ({
    topSection,
    middleSection,
    bottomSection,
    overlay
} : MediaTileProps) => (
    <div className="media-tile">
        {topSection && (
            <div className="media-tile-top">
                {topSection}
            </div>
        )}
        {middleSection && (
            <div className="media-tile-middle">
                {overlay && (
                    <div className="media-tile-overlay">
                        {overlay}
                    </div>
                )}
                {middleSection}
            </div>
        )}
        {bottomSection && (
            <div className="media-tile-bottom">
                {bottomSection}
            </div>
        )}
    </div>
);
export default MediaTile;
