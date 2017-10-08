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

import ActionButton from '../../buttons/ActionButton';

const Navigation = ( { addNew, changeContext, context, passive } ) => (
    <div className={`navigation ${passive ? 'no-pointer faded' : ''}`}>
        <ActionButton
            onClick={() => addNew()}
            title="Add a brand new goal."
            className="navigation__action-button action-button--align-right"
        >add new</ActionButton>

        <a className="context-selection" onClick={() => changeContext()}
            title="Change the active context."
        >
            <span className="context-selection__context-name">{context === 'demo' ? 'change context' : context}</span>
        </a>
    </div>
);

Navigation.propTypes = {
    addNew: PropTypes.func.isRequired,
    changeContext: PropTypes.func.isRequired,
    context: PropTypes.string.isRequired,
    passive: PropTypes.bool.isRequired
};

export default Navigation;
