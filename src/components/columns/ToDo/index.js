/*
 * ▬▬ι═══════ﺤJediFocus-═══════ι▬▬
 *   use the source to get things done
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bit.ly/bytesized
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io                                                     l
 */

import React from 'react';
import PropTypes from 'prop-types';

import BaseColumn from '../BaseColumn';

const ToDo = ( { items } ) => (
    <BaseColumn
        bucket="toDo"
        heading="To Do"
        className="column__to-do"
        items={items}
    />
);

ToDo.propTypes = {
    items: PropTypes.object.isRequired
};

export default ToDo;
