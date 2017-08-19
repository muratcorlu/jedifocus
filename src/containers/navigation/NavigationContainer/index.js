/*  __.-._
 *  '-._"7'  Jedi Focus
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

import * as actions from './actions';
import { connect } from 'kink';

import Navigation from '../../../components/navigation/Navigation';

const NavigationContainer = ( { addNew, search, changeContext, context } ) => (
    <Navigation
        addNew={addNew}
        search={search}
        changeContext={changeContext}
        context={context}
    />
);

NavigationContainer.propTypes = {
    addNew: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    changeContext: PropTypes.func.isRequired,
    context: PropTypes.string.isRequired
};

export default connect(
    NavigationContainer,
    actions,
    ( { context } ) => ( { context } )
);
