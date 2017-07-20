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

import ActionButton from '../../../components/buttons/ActionButton';

const ModalChangeContext = ( { show, changeContext } ) => show ? (
    <div className="modal-edit">
        <h2 className="modal-edit__heading"><label>Change Current Context</label></h2>

        <h3 className={`modal-edit__label modal-edit__label--centered
            modal-edit__label--top-pushed`}>
            <label htmlFor="modal-edit-context">Select the context you want to switch to</label>:
        </h3>

        <div className="modal-edit__body">
            <select id="modal-edit-context"
                className={`modal-edit__selection modal-edit__selection--inline
                    modal-edit__selection--larger modal-edit__selection--margin-adjust`}
                value={'default'}
                onChange={( evt ) => changeContext( evt.target.value ) }
            >
                <option value="default">Default</option>
                <option value="ice-box">Ice Box</option>
                <option value="cisco">Cisco</option>
                <option value="reading-queue">Reading Queue</option>
                <option value="watching-queue">Watching Queue</option>
            </select>
        </div>

        <div className={`modal-edit__actions modal-edit__actions--inline
            modal-edit__actions--centered modal-edit__actions--push-top`}>
            <ActionButton text="Done"
                onClick={() => {}}
            />
        </div>

    </div>
) : null;

ModalChangeContext.defaultProps = {
    show: false
};

ModalChangeContext.propTypes = {
    show: PropTypes.bool,
    changeContext: PropTypes.func.isRequired
};

export default ModalChangeContext;
