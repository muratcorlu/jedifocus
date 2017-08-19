/*  __.-._
 *  '-._"7'  Jedi Focus
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

import BaseColumn from '../../../components/columns/BaseColumn';

const BestIntentions = ( { items } ) => (
    <BaseColumn
        bucket="bestIntentions"
        heading="Best Intentions"
        headingClassName="column-heading__best-intentions"
        items={items}
    />
);

BestIntentions.propTypes = {
    items: PropTypes.object.isRequired
};

export default BestIntentions;
