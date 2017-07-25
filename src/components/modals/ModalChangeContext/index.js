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

import ContextDropdown from '../../../components/dropdowns/ContextDropdown';

const ModalChangeContext = ( { show, changeContext, context } ) => show ? (
    <div className="modal-edit">
        <h2 className="modal-edit__heading"><label>Change Current Context</label></h2>

        <h3 className={`modal-edit__label modal-edit__label--centered
            modal-edit__label--top-pushed`}>
            <label htmlFor="modal-edit-context">Select the context you want to switch to</label>:
        </h3>

        <div className="modal-edit__body modal-edit__body--for-context">
            <ContextDropdown id="modal-edit-context" value={context} onChange={changeContext} />
        </div>
    </div>
) : null;

ModalChangeContext.defaultProps = {
    show: false
};

ModalChangeContext.propTypes = {
    show: PropTypes.bool,
    context: PropTypes.string.isRequired,
    changeContext: PropTypes.func.isRequired
};

export default ModalChangeContext;
