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

import ActionButton from '../../../components/buttons/ActionButton';

const Navigation = ( { addNew, /* search, */ changeContext, context } ) => (
    <div className="navigation">
        <ActionButton
            onClick={() => addNew()}
            title="Add a brand new goal."
            className="action-button--align-right action-button--inverted navigation__action-button"
        ><img src="/images/icons/plus.png" alt="Plus Icon" title="Add a brand new goal." />&nbsp;</ActionButton>

        {/* <ActionButton */}
        {/* onClick={() => search()} */}
        {/* title="Search this context." */}
        {/* className="column__action-button navigation-main__action-button"*/}
        {/* >search <img src="/images/search.png" alt="Search Icon" title="Search this context." /></ActionButton> */}

        <a className="context-selection" onClick={() => changeContext()}
            title="Change the active context."
        >
            <span className="context-selection__context-name">{context}</span>
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
