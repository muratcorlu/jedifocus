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
import ContextDropdown from '../../../components/dropdowns/ContextDropdown';
import ColumnDropdown from '../../../components/dropdowns/ColumnDropdown';
import GoalDescriptionTextarea from '../../../components/textareas/GoalDescriptionTextarea';

const ModalEdit = ( {
    show, bucket, context, item, id,
    updateDescription, updateBucket, updateContext, saveGoal
} ) => show ? (
    <div className="modal-edit">
        <h2 className="modal-edit__heading"><label htmlFor="modal-edit-description">Describe Your Goal</label></h2>

        <h3 className="modal-edit__label modal-edit__label--floated modal-edit__label--floated-first">
            <label htmlFor="modal-edit-column">Stage</label></h3>
        <div>
            <ColumnDropdown id="modal-edit-column" value={bucket}
                onChange={( value ) => updateBucket( bucket, id, value )} />
        </div>

        <h3 className="modal-edit__label modal-edit__label--floated">
            <label htmlFor="modal-edit-context">Context</label></h3>

        <div>
            <ContextDropdown id="modal-edit-context" value={context}
                onChange={( value ) => updateContext( bucket, id, value )} />
        </div>

        <div>
            <GoalDescriptionTextarea id="modal-edit-description" value={item}
                onChange={( value ) => updateDescription( bucket, id, value )} />
        </div>

        <div className="modal-edit__actions">
            <ActionButton onClick={() => saveGoal()}>Save</ActionButton>
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
    context: PropTypes.string.isRequired,
    saveGoal: PropTypes.func.isRequired,
    show: PropTypes.bool,
    updateBucket: PropTypes.func.isRequired,
    updateDescription: PropTypes.func.isRequired,
    updateContext: PropTypes.func.isRequired
};

export default ModalEdit;
