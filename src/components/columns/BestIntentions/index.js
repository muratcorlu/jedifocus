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

import BaseColumn from '../../../components/columns/BaseColumn';

const BestIntentions = ( { items } ) => (
    <BaseColumn
        column="bestIntentions"
        heading="Best Intentions"
        className="column__best-intentions"
        headingClassName="column__heading column__heading--best-intentions"
        items={items}
    />
);

BestIntentions.propTypes = {
    items: PropTypes.object.isRequired
};

export default BestIntentions;
