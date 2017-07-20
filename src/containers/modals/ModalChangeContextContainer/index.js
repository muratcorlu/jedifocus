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

import ModalChangeContext from '../../../components/modals/ModalChangeContext';

import actions from './actions';
import { connect } from 'kink';

const ModalChangeContextContainer = ( { show, changeContext } ) => (
    <ModalChangeContext
        show={show}
        changeContext={changeContext}
    />
);

ModalChangeContextContainer.propTypes = {
    show: PropTypes.bool.isRequired,
    changeContext: PropTypes.func.isRequired
};

export default connect(
    ModalChangeContextContainer,
    actions,
    ( { modalContextVisible } ) => ( { show: modalContextVisible } )
);
