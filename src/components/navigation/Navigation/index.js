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

import ActionButton from '../../../components/buttons/ActionButton';

const Navigation = ( { addNew, changeContext, context } ) => (
    <div className="navigation-main">
        <ActionButton text="Add a New Goal"
            onClick={() => addNew()}
            className="column__action-button navigation-main__action-button"
        />

        <ActionButton text="Change Context"
            onClick={() => changeContext()}
            className="column__action-button navigation-main__action-button"
        />

        <ActionButton text="Search & Filter"
            onClick={() => addNew()}
            className="column__action-button navigation-main__action-button"
        />

        <div className="navigation-context">
            <em className="navigation-context__context-label">context:</em>
            {' '}
            <strong className="navigation-context__context-name">{context}</strong>
        </div>
    </div>
);

Navigation.propTypes = {
    addNew: PropTypes.func.isRequired,
    changeContext: PropTypes.func.isRequired,
    context: PropTypes.string.isRequired
};

export default Navigation;
