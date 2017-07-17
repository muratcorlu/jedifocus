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

import * as actions from './actions';
import { connect } from 'kink';
import { returnObject } from 'delgado';

import Navigation from '../../../components/navigation/Navigation';

const NavigationContainer = ( { addNew } ) => (
    <Navigation addNew={addNew} />
);

NavigationContainer.propTypes = {
    addNew: PropTypes.func.isRequired
};

export default connect( NavigationContainer, actions, returnObject );
