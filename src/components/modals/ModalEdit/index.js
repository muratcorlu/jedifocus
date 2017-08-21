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

import ActionButton from '../../../components/buttons/ActionButton';
import ContextDropdown from '../../../components/dropdowns/ContextDropdown';
import ColumnDropdown from '../../../components/dropdowns/ColumnDropdown';
import GoalDescriptionTextarea from '../../../components/textareas/GoalDescriptionTextarea';

const ModalEdit = ( {
    show, column, context, item, id,
    updateDescription, updateColumn, updateContext, saveGoal
} ) => show ? (
    <div className="modal-edit">
        <h2 className="modal-edit__heading">
            <label htmlFor="modal-edit-description" className="modal-edit__heading--label">Describe Your Goal</label>
        </h2>

        <h3 className="modal-edit__label modal-edit__label--floated modal-edit__label--floated-first">
            <label htmlFor="modal-edit-column">Column</label></h3>
        <div>
            <ColumnDropdown id="modal-edit-column" value={column}
                onChange={( value ) => updateColumn( column, id, value )} />
        </div>

        <h3 className="modal-edit__label modal-edit__label--floated">
            <label htmlFor="modal-edit-context">Context</label></h3>

        <div>
            <ContextDropdown id="modal-edit-context" value={context}
                onChange={( value ) => updateContext( column, id, value )} className="" />
        </div>

        <div>
            <GoalDescriptionTextarea id="modal-edit-description" value={item}
                onChange={( value ) => updateDescription( column, id, value )} />
        </div>

        <div className="modal-edit__actions">
            <ActionButton onClick={() => saveGoal()}
                className="action-button--modal action-button--default">Save</ActionButton>
        </div>
    </div>
) : null;

ModalEdit.defaultProps = {
    show: false
};

ModalEdit.propTypes = {
    column: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    saveGoal: PropTypes.func.isRequired,
    show: PropTypes.bool,
    updateColumn: PropTypes.func.isRequired,
    updateDescription: PropTypes.func.isRequired,
    updateContext: PropTypes.func.isRequired
};

export default ModalEdit;
