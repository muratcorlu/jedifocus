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

import ModalChangeContext from '../../../components/modals/ModalChangeContext';

import * as actions from './actions';
import { connect } from 'kink';

const ModalChangeContextContainer = ( { show, context, changeContext } ) => (
    <ModalChangeContext
        show={show}
        context={context}
        changeContext={changeContext}
    />
);

ModalChangeContextContainer.propTypes = {
    show: PropTypes.bool.isRequired,
    context: PropTypes.string.isRequired,
    changeContext: PropTypes.func.isRequired
};

export default connect(
    ModalChangeContextContainer,
    actions,
    ( { modalContextVisible, context } ) => ( { show: modalContextVisible, context } )
);
