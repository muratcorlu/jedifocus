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

import BaseColumn from '..//BaseColumn';

const COLUMN_NAME = 'bestIntentions';

const progressClassName = ( modalColumn ) => {
    return modalColumn === COLUMN_NAME ?
        'column__heading--best-intentions-selected' : 'column__heading--best-intentions';
};

const classModifier = ( modalColumn ) => {
    if ( modalColumn === '' ) { return ''; }

    return modalColumn === COLUMN_NAME ? '--selected' : '--dimmed';
};

const BestIntentions = ( { items, modalId, modalColumn } ) => (
    <BaseColumn
        column={COLUMN_NAME}
        heading="Best Intentions"
        className="column__best-intentions"
        headingClassName={`column__heading${classModifier( modalColumn )} ${progressClassName( modalColumn )}`}
        items={items}
        modalId={modalId}
    />
);

BestIntentions.propTypes = {
    items: PropTypes.object.isRequired,
    modalId: PropTypes.string.isRequired,
    modalColumn: PropTypes.string.isRequired
};

export default BestIntentions;
