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
        <ActionButton
            onClick={() => addNew()}
            className="column__action-button navigation-main__action-button"
        >new goal <img src="/images/plus.png" /></ActionButton>

        <ActionButton
            onClick={() => addNew()}
            className="column__action-button navigation-main__action-button"
        >search <img src="/images/search.png" /></ActionButton>

        <div className="navigation-context" onClick={() => changeContext()}>
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
