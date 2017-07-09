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

const ModalEdit = ( {
    show, bucket, item, id,
    updateDescription, updateBucket, saveGoal,
    bestIntentions, inProgress, toDo
} ) => show ? (
    <div className="modal-edit">
        <h2 className="modal-edit__heading">Edit Your Goal</h2>

        <h3 className="modal-edit__label"><label htmlFor="modal-edit-description">Description</label></h3>
        <div>
            <textarea id="modal-edit-description" className="modal-edit__description" autoFocus
                value={item}
                onChange={( evt ) => updateDescription( bucket, id, evt.target.value )}
            />
        </div>

        <h3 className="modal-edit__label"><label htmlFor="modal-edit-column">State</label></h3>
        <div>
            <select id="modal-edit-column" className="modal-edit__column"
                value={bucket}
                onChange={( evt ) => updateBucket( bucket, id, evt.target.value )}
            >
                <option value="bestIntentions">Best Intentions</option>
                <option value="toDo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
            </select>
        </div>

        <div className="modal-edit__actions">
            <ActionButton text="Done"
                onClick={() => saveGoal( { bestIntentions, inProgress, toDo } )}
            />
        </div>
    </div>
) : null;

ModalEdit.defaultProps = {
    show: false
};

ModalEdit.propTypes = {
    bucket: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    saveGoal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    updateBucket: PropTypes.func.isRequired,
    updateDescription: PropTypes.func.isRequired,
    bestIntentions: PropTypes.object.isRequired,
    inProgress: PropTypes.object.isRequired,
    toDo: PropTypes.object.isRequired
};

export default ModalEdit;
