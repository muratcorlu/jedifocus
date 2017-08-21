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

import * as actions from './actions';
import { connect } from 'kink';

import ModalEdit from '../../../components/modals/ModalEdit';

const ModalEditContainer = ( {
    context, column, id, item, userId, stateContext, show,
    updateColumn, updateContext, updateDescription, saveGoal
} ) => (
    <ModalEdit
        context={context} column={column} id={id} item={item} show={show}
        saveGoal={() => saveGoal( userId, context, column, id, item, stateContext )}
        updateColumn={updateColumn}
        updateContext={updateContext}
        updateDescription={updateDescription}
    />
);

ModalEditContainer.propTypes = {
    column: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    stateContext: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    saveGoal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    updateColumn: PropTypes.func.isRequired,
    updateDescription: PropTypes.func.isRequired,
    updateContext: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
};

export default connect(
    ModalEditContainer,
    actions,
    ( {
        bestIntentions,
        modalColumn,
        modalId,
        modalItem,
        modalVisible,
        modalContext,
        context,
        inProgress,
        toDo,
        userId
    } ) => ( {
        bestIntentions: bestIntentions ? bestIntentions.toJSON() : {},
        column: modalColumn,
        id: modalId,
        inProgress: inProgress ? inProgress.toJSON() : {},
        item: modalItem,
        show: modalVisible,
        context: modalContext,
        stateContext: context,
        toDo: toDo ? toDo.toJSON() : {},
        userId
    } )
);
