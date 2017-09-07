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

const LoadingIndicator = ( { show, text } ) => (
    <div className={show ? 'loading' : 'loading loading--hidden'}>{text}</div>
);

LoadingIndicator.defaultProps = { show: false };

LoadingIndicator.propTypes = {
    show: PropTypes.bool,
    text: PropTypes.string.isRequired
};

export default LoadingIndicator;
