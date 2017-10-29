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

import BaseColumn from '../../../components/column/BaseColumn';

const COLUMN_NAME = 'toDo';

const progressClassName = ( modalColumn ) => {
    return modalColumn === COLUMN_NAME ?
        'column__heading--to-do-selected' : 'column__heading--to-do';
};

const classModifier = ( modalColumn ) => {
    if ( modalColumn === '' ) { return ''; }

    return modalColumn === COLUMN_NAME ? '--selected' : '--dimmed';
};

const ToDo = ( { descriptions, modalId, modalColumn } ) => (
    <BaseColumn
        column="toDo"
        heading="To Do"
        className="column__to-do"
        headingClassName={`column__heading column__heading${
            classModifier( modalColumn )} ${progressClassName( modalColumn )}`}
        descriptions={descriptions}
        modalId={modalId}
    />
);

ToDo.propTypes = {
    descriptions: PropTypes.object.isRequired,
    modalId: PropTypes.string.isRequired,
    modalColumn: PropTypes.string.isRequired
};

export default ToDo;
