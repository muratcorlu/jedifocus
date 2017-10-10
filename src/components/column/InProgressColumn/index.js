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

import BaseColumn from '../BaseColumn';

const COLUMN_NAME = 'inProgress';

const progressClassName = ( modalColumn ) => {
    return modalColumn === COLUMN_NAME ? 'column__heading--in-progress-selected' : 'column__heading--in-progress';
};

const classModifier = ( modalColumn ) => {
    if ( modalColumn === '' ) { return ''; }

    return modalColumn === COLUMN_NAME ? '--selected' : '--dimmed';
};

const headingClassName = ( modalColumn ) => `column__heading column__heading${classModifier( modalColumn )} ` +
    `${progressClassName( modalColumn )}`;

const InProgress = ( { descriptions, modalId, modalColumn } ) => (
    <BaseColumn
        column={COLUMN_NAME}
        heading="In Progress"
        className="column__in-progress"
        headingClassName={headingClassName( modalColumn )}
        descriptions={descriptions}
        modalId={modalId}
    />
);

InProgress.propTypes = {
    descriptions: PropTypes.object.isRequired,
    modalId: PropTypes.string.isRequired,
    modalColumn: PropTypes.string.isRequired
};

export default InProgress;
