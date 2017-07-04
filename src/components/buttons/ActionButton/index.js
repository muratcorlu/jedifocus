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

const ActionButton = ( { text, onClick, className } ) => (
    <a href="#" className={`action-button ${className}`}
        onClick={( evt ) => {
            evt.preventDefault();
            onClick( evt );
        }}>{text}</a>
);

ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default ActionButton;
