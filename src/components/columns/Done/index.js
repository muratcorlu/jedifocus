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

const Done = ( { items } ) => (
    <BaseColumn
        bucket="done"
        heading="Done"
        className="column__done"
        items={items}
    />
);

Done.propTypes = {
    items: PropTypes.object.isRequired
};

export default Done;
