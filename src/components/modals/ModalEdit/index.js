import React from 'react';
import PropTypes from 'prop-types';

const ModalEdit = ( { show } ) => show ? (
    <div className="modal-edit">
        <h2 className="modal-edit__heading">Edit Your Goal</h2>

        <h3 className="modal-edit__label"><label htmlFor="modal-edit-description">Description</label></h3>
        <div>
            <textarea id="modal-edit-description" className="modal-edit__description" autoFocus>
                Remember the milk.
                Remember other stuff too.
            </textarea>
        </div>

        <h3 className="modal-edit__label"><label htmlFor="modal-edit-column">Bucket</label></h3>
        <div>
            <select id="modal-edit-column" className="modal-edit__column">
                <option>Good Intentions</option>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
            </select>
        </div>

        <div className="modal-edit__actions">
            <a href="#" className="modal-edit__action-button">Done</a>
        </div>
    </div>
) : null;

ModalEdit.defaultProps = {
    show: false
};

ModalEdit.propTypes = {
    show: PropTypes.bool
};

export default ModalEdit;
