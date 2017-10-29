/*  __.-._
 *  '-._"7'  JediFocus
 *   /'.-c
 *   |  /T   Do. Or do not.
 *  _)_/LI   There is no try.
 *
 *  This project is a part of the “Byte-Sized JavaScript” videocasts.
 *  You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 *  MIT Licensed — See LICENSE.md
 *
 *  Send your comments, suggestions, and feedback to me@volkan.io
 */

import React from 'react';
import PropTypes from 'prop-types';

import ActionButton from '../../buttons/ActionButton';

const Add = () => (
    <svg version="1.1" width="36" height="36" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
        <path d="M26.17,17H19V9.83a1,1,0,0,0-2,0V17H9.83a1,1,0,0,0,0,2H17v7.17a1,1,0,0,0,2,0V19h7.17a1,1,0,0,0,0-2Z" />
        <path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z" />
        <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </svg>
);

/* eslint-disable max-len */
const Runway = () => (
    <svg version="1.1" width="36" height="36" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
        <path d="M33.59,6.19A1,1,0,0,0,32.7,6L23.09,9,13.46,4.11a1,1,0,0,0-.84,0L2.62,8.2A1,1,0,0,0,2,9.13V29.61a1,1,0,0,0,1.38.92L13,26.58l9.59,4.92a1,1,0,0,0,.46.11,1,1,0,0,0,.3,0l10-3.12a1,1,0,0,0,.7-1V7A1,1,0,0,0,33.59,6.19ZM32,26.75l-8.32,2.6V27.06h-1.6v2l-8.4-4.31V23.06h-1.6v1.72L4,28.11V9.79l8.08-3.33V8.81h1.6V6.47l8.4,4.3v2.1h1.6V11L32,8.36Z" />
        <rect x="22.08" y="15.06" width="1.6" height="3.81" />
        <rect x="22.08" y="21.06" width="1.6" height="3.81" />
        <rect x="12.08" y="11.06" width="1.6" height="3.81" />
        <rect x="12.08" y="17.13" width="1.6" height="3.75" />
        <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
    </svg>
);
/* eslint-enable max-len */

/* eslint-disable max-len */
const LowHangingFruits = () => (
    <svg version="1.1" width="36" height="36" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
        <path d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.22.22,0,0,1,.08.24L7.35,31.21A2.23,2.23,0,0,0,9.49,34a2.22,2.22,0,0,0,1.24-.38l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.22,2.22,0,0,0,3.38-2.45l-2.45-8.64a.23.23,0,0,1,.08-.24ZM18.33,26.62h0a2.21,2.21,0,0,0-1.24.38L9.62,32a.22.22,0,0,1-.34-.25l2.45-8.64A2.21,2.21,0,0,0,11,20.76L3.9,15.21a.22.22,0,0,1,.13-.4l9-.34A2.22,2.22,0,0,0,15,13l3.1-8.43a.2.2,0,0,1,.21-.15h0Z" />
        <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </svg>
);
/* eslint-enable max-len */

/* eslint-disable max-len */
const Errands = () => (
    <svg version="1.1" width="36" height="36" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
        <path d="M29.29,34H6.71A1.7,1.7,0,0,1,5,32.31V6.69A1.75,1.75,0,0,1,7,5H9V7H7V32H29V7H27V5h2.25A1.7,1.7,0,0,1,31,6.69V32.31A1.7,1.7,0,0,1,29.29,34Z" />
        <path d="M16.66,25.76,11.3,20.4A1,1,0,0,1,12.72,19l3.94,3.94,8.64-8.64a1,1,0,0,1,1.41,1.41Z" />
        <path d="M26,11H10V7.33A2.34,2.34,0,0,1,12.33,5h1.79a4,4,0,0,1,7.75,0h1.79A2.34,2.34,0,0,1,26,7.33ZM12,9H24V7.33A.33.33,0,0,0,23.67,7H20V6a2,2,0,0,0-4,0V7H12.33a.33.33,0,0,0-.33.33Z" />
        <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </svg>
);
/* eslint-enable max-len */

/* eslint-disable max-len */
const Backlog = () => (
    <svg version="1.1" width="36" height="36" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
        <path d="M31,34H13a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H31a1,1,0,0,1,1,1V33A1,1,0,0,1,31,34ZM14,32H30V12H14Z" />
        <rect x="16" y="16" width="12" height="2" />
        <rect x="16" y="20" width="12" height="2" />
        <rect x="16" y="24" width="12" height="2" />
        <path d="M6,24V4H24V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3V25a1,1,0,0,0,1,1H6Z" />
        <path d="M10,28V8H28V7a1,1,0,0,0-1-1H9A1,1,0,0,0,8,7V29a1,1,0,0,0,1,1h1Z" />
        <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
    </svg>
);
/* eslint-enable max-len */

/* eslint-disable max-len */
const Revisit = () => (
    <svg version="1.1" width="36" height="36" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
        <path d="M18,2.25a11,11,0,0,0-11,11,10.68,10.68,0,0,0,1,4.63,16.36,16.36,0,0,0,1.12,1.78,17,17,0,0,1,2,3.47,16.19,16.19,0,0,1,.59,4h2A18.17,18.17,0,0,0,13,22.44a18.46,18.46,0,0,0-2.22-3.92,15.79,15.79,0,0,1-1-1.54A8.64,8.64,0,0,1,9,13.23a9,9,0,0,1,18.07,0A8.64,8.64,0,0,1,26.21,17a15.79,15.79,0,0,1-1,1.54A18.46,18.46,0,0,0,23,22.44a18.17,18.17,0,0,0-.71,4.71h2a16.19,16.19,0,0,1,.59-4,17,17,0,0,1,2-3.47A16.31,16.31,0,0,0,28,17.86a10.68,10.68,0,0,0,1-4.63A11,11,0,0,0,18,2.25Z" />
        <path d="M18.63,15.51a.8.8,0,0,0-1.13,0l-3,3,2.86,3.13v5.54H19V21l-2.24-2.45,1.89-1.89A.8.8,0,0,0,18.63,15.51Z" />
        <path d="M23.86,29.15H12.11a.8.8,0,1,0,0,1.6H23.86a.8.8,0,0,0,0-1.6Z" />
        <path d="M22,32.15H14a.8.8,0,1,0,0,1.6H22a.8.8,0,1,0,0-1.6Z" />
        <path d="M17.32,10.89l-2.73,2.73a.8.8,0,0,0,1.13,1.13L18.45,12a.8.8,0,1,0-1.13-1.13Z" />
        <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </svg>
);
/* eslint-enable max-len */

/* eslint-disable max-len */
const Later = () => (
    <svg version="1.1" width="36" height="36" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
        <path d="M18,9.83a1,1,0,0,0-1,1v8.72l5.9,4A1,1,0,0,0,24,21.88l-5-3.39V10.83A1,1,0,0,0,18,9.83Z" />
        <path d="M 18.223 34.013 C 12.511 33.993 7.318 30.834 4.592 25.753 L 4.592 30.813 C 4.592 31.583 3.813 32.064 3.164 31.679 C 2.774 31.5 2.644 31.17 2.644 30.813 L 2.644 22.013 L 11.213 22.013 C 11.992 22.013 12.381 22.846 11.992 23.513 C 11.862 23.822 11.473 24.013 11.213 24.013 L 5.89 24.013 C 10.304 33.752 23.416 34.844 29.388 25.978 C 35.36 17.112 29.778 4.938 19.262 4.064 C 15.497 3.75 11.862 5.053 9.006 7.663 C 8.486 8.183 7.578 7.891 7.448 7.138 C 7.318 6.788 7.448 6.424 7.707 6.183 C 16.535 -2.11 30.816 2.565 33.413 14.599 C 35.49 24.577 28.09 34.015 18.223 34.013 Z"
            transform="matrix(-1, 0, 0, -1, 36, 36)" />
        <rect width="36" height="36" fillOpacity="0" y="0" x="0" />
    </svg>
);
/* eslint-enable max-len */

/* eslint-disable max-len */
const IceBox = () => (
    <svg version="1.1" width="36" height="36" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
        <path d="M31.42,9.09l-13-6a1,1,0,0,0-.84,0l-13,6A1,1,0,0,0,4,10V27a1,1,0,0,0,.58.91l13,6a1,1,0,0,0,.84,0l13-6A1,1,0,0,0,32,27V10A1,1,0,0,0,31.42,9.09ZM18,5.1,28.61,10,18,14.9,7.39,10ZM6,11.56l11,5.08v14.8L6,26.36ZM19,31.44V16.64l11-5.08v14.8Z" />
        <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
    </svg>
);
/* eslint-enable max-len */

const Navigation = ( { addNew, changeContext, context, passive } ) => (
    <div className={`navigation ${passive ? 'no-pointer faded' : ''}`}>
        <ActionButton onClick={() => addNew()} title="Add a brand new goal."
            className="navigation__action-button action-button--align-right"
        ><Add /></ActionButton>

        <a className="context-selection" onClick={() => changeContext()}
            title="Change the active context."
        >
            {context === 'runway' ? <Runway /> : null}
            {context === 'backlog' ? <Backlog /> : null}
            {context === 'errands' ? <Errands /> : null}
            {context === 'ice-box' ? <IceBox /> : null}
            {context === 'later' ? <Later /> : null}
            {context === 'revisit' ? <Revisit /> : null}
            {context === 'low-hanging-fruits' ? <LowHangingFruits /> : null}
        </a>
    </div>
);

Navigation.propTypes = {
    addNew: PropTypes.func.isRequired,
    changeContext: PropTypes.func.isRequired,
    context: PropTypes.string.isRequired,
    passive: PropTypes.bool.isRequired
};

export default Navigation;
