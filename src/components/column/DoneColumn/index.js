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

const Done = ( { descriptions, modalId } ) => (
    <BaseColumn
        column="done"
        heading="Done & Dead"
        className="column__done"
        headingClassName="column__heading column__heading--done"
        descriptions={descriptions}
        modalId={modalId}
    />
);

Done.propTypes = {
    descriptions: PropTypes.object.isRequired,
    modalId: PropTypes.string.isRequired
};

export default Done;
