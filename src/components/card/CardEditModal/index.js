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

import ActionButton from '../../buttons/ActionButton';
import ContextDropdown from '../../../components/context/ContextDropdown';
import ColumnDropdown from '../../../components/column/ColumnDropdown';
import CardDescriptionTextarea from '../../../components/card/CardDescriptionTextarea';

const CardEditModal = ({
    show, column, context, item, id,
    updateCardDescription, updateCardColumn, updateCardContext, saveCard
} ) => show ? (
    <div className="modal-edit">
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
                onChange={( value ) => updateCardContext( value )} className="" />
        </div>

        <h3 className="modal-edit__label pull-right">
            <label htmlFor="modal-edit-context">Context</label></h3>

        <div>
            <CardDescriptionTextarea id="modal-edit-description" value={item}
                onChange={( value ) => updateCardDescription( column, id, value )} />
        </div>

        <div className="modal-edit__actions">
            <ActionButton
                onClick={() => saveCard()}
                className="action-button--modal action-button--align-center action-button--default"
            >Save Your Goal</ActionButton>
        </div>
    </div>
) : null;

CardEditModal.defaultProps = { show: false };

CardEditModal.propTypes = {
    column: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    saveCard: PropTypes.func.isRequired,
    show: PropTypes.bool,
    updateCardColumn: PropTypes.func.isRequired,
    updateCardContext: PropTypes.func.isRequired,
    updateCardDescription: PropTypes.func.isRequired
};

export default CardEditModal;
