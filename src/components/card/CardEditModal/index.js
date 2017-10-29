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
import ContextDropdown from '../../../components/context/ContextDropdown';
import ColumnDropdown from '../../../components/column/ColumnDropdown';
import CardDescriptionTextarea from '../../../components/card/CardDescriptionTextarea';

const Save = () => (
    <svg version="1.1" width="36" height="36"  viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
        <path className="clr-i-outline clr-i-outline-path-1" d="M34.1,4,31.71,1.6a1.83,1.83,0,0,0-1.31-.54h0a2.05,2.05,0,0,0-1.45.62L1.76,29.23A2,2,0,0,0,1.68,32l2.4,2.43A1.83,1.83,0,0,0,5.39,35h0a2.05,2.05,0,0,0,1.45-.62L34,6.79A2,2,0,0,0,34.1,4ZM5.42,32.93,3.16,30.65h0L24.11,9.43l2.25,2.28ZM32.61,5.39l-5.12,5.18L25.24,8.29l5.13-5.2,2.25,2.28Z"></path>
        <path className="clr-i-outline clr-i-outline-path-2" d="M32.53,20.47l2.09-2.09a.8.8,0,0,0-1.13-1.13l-2.09,2.09-2.09-2.09a.8.8,0,0,0-1.13,1.13l2.09,2.09-2.09,2.09a.8.8,0,0,0,1.13,1.13l2.09-2.09,2.09,2.09a.8.8,0,0,0,1.13-1.13Z"></path>
        <path className="clr-i-outline clr-i-outline-path-3" d="M14.78,6.51a.8.8,0,0,0,1.13,0L17.4,5l1.49,1.49A.8.8,0,0,0,20,5.38L18.54,3.89,20,2.4a.8.8,0,0,0-1.13-1.13L17.4,2.76,15.91,1.27A.8.8,0,1,0,14.78,2.4l1.49,1.49L14.78,5.38A.8.8,0,0,0,14.78,6.51Z"></path>
        <path className="clr-i-outline clr-i-outline-path-4" d="M8.33,15.26a.8.8,0,0,0,1.13,0l1.16-1.16,1.16,1.16a.8.8,0,1,0,1.13-1.13L11.76,13l1.16-1.16a.8.8,0,1,0-1.13-1.13l-1.16,1.16L9.46,10.68a.8.8,0,1,0-1.13,1.13L9.49,13,8.33,14.13A.8.8,0,0,0,8.33,15.26Z"></path>
        <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
    </svg>
);


const CardEditModal = ( {
    show, reveal, column, context, description, id,
    updateCardDescription, updateCardColumn, updateCardContext, saveCard
} ) => show ? (
    <div className={`modal-edit ${reveal ? '' : 'modal-edit--faded'}`}>
        <h2 className="modal-edit__heading">
            <label
                className="modal-edit__heading-label"
                htmlFor="modal-edit-description">Describe Your Goal</label>
        </h2>

        <h3 className="modal-edit__label modal-edit__label--floated modal-edit__label--floated-first">
            <label htmlFor="modal-edit-column">Column</label></h3>
        <div>
            <ColumnDropdown id="modal-edit-column" value={column}
                onChange={( value ) => updateCardColumn( column, id, value )} />
        </div>

        <div className="pull-right">
            <ContextDropdown id="modal-edit-context" value={context}
                onChange={( value ) => updateCardContext( column, id, description, value )} className="" />
        </div>

        <h3 className="modal-edit__label pull-right">
            <label htmlFor="modal-edit-context">Context</label></h3>

        <div>
            <CardDescriptionTextarea id="modal-edit-description" value={description}
                onChange={( value ) => updateCardDescription( column, id, value, context )} />
        </div>

        <div className="modal-edit__actions">
            <ActionButton
                onClick={() => saveCard()}
                disabled={description.trim() === ''}
                className={`action-button--modal action-button--align-center
                    ${description.trim() === '' ? '' : 'action-button--default'}`}
            >Save Your Goal <Save /></ActionButton>
        </div>
    </div>
) : null;

CardEditModal.defaultProps = { show: false };

CardEditModal.propTypes = {
    column: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    reveal: PropTypes.bool,
    saveCard: PropTypes.func.isRequired,
    show: PropTypes.bool,
    updateCardColumn: PropTypes.func.isRequired,
    updateCardContext: PropTypes.func.isRequired,
    updateCardDescription: PropTypes.func.isRequired
};

export default CardEditModal;
