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

const ActionButton = ( { children, onClick, className, title, disabled } ) => (
    <a href="#"
        className={`action-button ${disabled ? 'action-button--disabled' : ''} ${className || ''}`}
        title={title || ''}
        onClick={( evt ) => {
            evt.preventDefault();
            if ( disabled ) {return;}
            onClick( evt );
        }}>{children}</a>
);

ActionButton.defaultProps = {
    disabled: false
};

ActionButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool
};

export default ActionButton;
