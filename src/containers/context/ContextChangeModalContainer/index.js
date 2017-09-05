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

import ContextChangeModal from '../../../components/context/ContextChangeModal';

import * as actions from './actions';
import { connect } from 'kink';

const ContextChangeModalContainer = ( { show, reveal, context, changeContext } ) => (
    <ContextChangeModal show={show} reveal={reveal} context={context} changeContext={changeContext} />
);

ContextChangeModalContainer.propTypes = {
    show: PropTypes.bool.isRequired,
    reveal: PropTypes.bool.isRequired,
    context: PropTypes.string.isRequired,
    changeContext: PropTypes.func.isRequired
};

export default connect(
    ContextChangeModalContainer,
    actions,
    ( { modalContextVisible, modalRevealed, context } ) => ( {
        show: modalContextVisible, reveal: modalRevealed, context } )
);
