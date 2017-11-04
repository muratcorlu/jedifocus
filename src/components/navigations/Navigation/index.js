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

import IconAdd from '../../../components/icons/IconAdd';
import IconBacklog from '../../../components/icons/IconBacklog';
import IconErrands from '../../../components/icons/IconErrands';
import IconIceBox from '../../../components/icons/IconIceBox';
import IconLater from '../../../components/icons/IconLater';
import IconLowHangingFruits from '../../../components/icons/IconLowHangingFruits';
import IconRevisit from '../../../components/icons/IconRevisit';
import IconRunway from '../../../components/icons/IconRunway';

const Navigation = ( { addNew, changeContext, context, passive } ) => (
    <div className={`navigation ${passive ? 'no-pointer faded' : ''}`}>
        <ActionButton onClick={() => addNew()} title="Add a brand new goal."
            className="navigation__action-button action-button--align-right"
        ><IconAdd /></ActionButton>

        <a className="context-selection" onClick={() => changeContext()}
            title="Change the active context."
        >
            {context === 'runway' ? <IconRunway /> : null}
            {context === 'backlog' ? <IconBacklog /> : null}
            {context === 'errands' ? <IconErrands /> : null}
            {context === 'ice-box' ? <IconIceBox /> : null}
            {context === 'later' ? <IconLater /> : null}
            {context === 'revisit' ? <IconRevisit /> : null}
            {context === 'low-hanging-fruits' ? <IconLowHangingFruits /> : null}
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
