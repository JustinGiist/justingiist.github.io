import React from 'react';
import './AnimatedCheckmark.scss';

// Later we should switch to an icon system, rather an svg. We can still animate that.
const AnimatedCheckmark = ({ tooltip, useCancel }) => (useCancel ? (
    <svg data-tip={tooltip} style={{ width: 16, height: 16 }} className="checkmark error" viewBox="0 0 24 24">
        <circle className="checkmark__circle error" cx="12" cy="12" r="12" fill="none" />
        <path style={{ width: 12, height: 12 }} fill="none" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
) : (
    <svg data-tip={tooltip} className="checkmark success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className="checkmark__circle success" cx="26" cy="26" r="25" fill="none" />
        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
));
export default AnimatedCheckmark;
