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

const Navigation = ( { addNew, /* search, */ changeContext, context } ) => (
    <div className="navigation-main">
        <ActionButton
            onClick={() => addNew()}
            title="Add a brand new goal."
            className="column__action-button navigation-main__action-button"
        >new goal <img src="/images/plus.png" alt="Plus Icon" title="Add a brand new goal." /></ActionButton>

        {/* <ActionButton */}
        {/* onClick={() => search()} */}
        {/* title="Search this context." */}
        {/* className="column__action-button navigation-main__action-button"*/}
        {/* >search <img src="/images/search.png" alt="Search Icon" title="Search this context." /></ActionButton> */}

        <a className="navigation-context" onClick={() => changeContext()}
            title="Change the active context."
        >
            <strong className="navigation-context__context-name">{context}</strong>
        </a>
    </div>
);

Navigation.propTypes = {
    addNew: PropTypes.func.isRequired,
    changeContext: PropTypes.func.isRequired,
    context: PropTypes.string.isRequired // ,
    // search: PropTypes.func.isRequired
};

export default Navigation;
