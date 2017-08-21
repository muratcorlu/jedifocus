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

const ToDo = ( { items } ) => (
    <BaseColumn
        column="toDo"
        heading="To Do"
        headingClassName="column-heading__to-do"
        items={items}
    />
);

ToDo.propTypes = {
    items: PropTypes.object.isRequired
};

export default ToDo;
