/*   __
 *  |::|    Jedi Focus
 *  |::|
 * _|//|_  Do. Or do not.
 * |____|  There is no try.
 *  || |
 *  | ||   This project is a part of the “Byte-Sized JavaScript” videocasts.
 *  | ||   You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *  || |
 *  || |   MIT Licensed — See LICENSE.md
 *  || |
 *  | ||   Send your comments, suggestions, and feedback to me@volkan.io
 *  ||||
 */

import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ( { children, onClick, className } ) => (
    <a href="#" className={`action-button ${className}`}
        onClick={( evt ) => {
            evt.preventDefault();
            onClick( evt );
        }}>{children}</a>
);

ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
};

export default ActionButton;
