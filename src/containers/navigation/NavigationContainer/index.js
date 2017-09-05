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

import * as actions from './actions';
import { connect } from 'kink';

import Navigation from '../../../components/navigations/Navigation';

const NavigationContainer = ( { addNew, changeContext, context, passive } ) => (
    <Navigation
        addNew={addNew}
        changeContext={changeContext}
        context={context}
        passive={passive}
    />
);

NavigationContainer.propTypes = {
    addNew: PropTypes.func.isRequired,
    changeContext: PropTypes.func.isRequired,
    context: PropTypes.string.isRequired,
    passive: PropTypes.bool.isRequired
};

export default connect(
    NavigationContainer,
    actions,
    ( { context, modalVisible, modalContextVisible, appStateFetched } ) => ( {
        context,
        passive: modalVisible || modalContextVisible || !appStateFetched
    } )
);
