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

import ContextListing from '../../../components/context/ContextListing';

const ContextChangeModal = ( { show, changeContext, context } ) => show ? (
    <div className="modal-edit">
        <h2 className="modal-edit__heading">
            <label className="modal-edit__heading--label">Change Current Context</label>
        </h2>

        <p className='modal-edit__label--context-switch'>
            Select the context you want to switch to.
        </p>

        <div className="modal-edit__body modal-edit__body--for-context">
            <ContextListing value={context} onChange={changeContext} className="" />
        </div>
    </div>
) : null;

ContextChangeModal.defaultProps = { show: false };

ContextChangeModal.propTypes = {
    show: PropTypes.bool,
    context: PropTypes.string.isRequired,
    changeContext: PropTypes.func.isRequired
};

export default ContextChangeModal;
