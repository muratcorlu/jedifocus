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

import CardEditModal from '../../../components/card/CardEditModal';

const CardEditModalContainer = ( {
    context, column, id, description, userId, stateContext, show, reveal,
    updateCardColumn, updateCardContext, updateCardDescription, saveCard
} ) => (
    <CardEditModal
        context={context} column={column} id={id} description={description} show={show} reveal={reveal}
        saveCard={() => saveCard( userId, context, column, id, description, stateContext )}
        updateCardColumn={updateCardColumn}
        updateCardContext={updateCardContext}
        updateCardDescription={updateCardDescription}
    />
);

CardEditModalContainer.propTypes = {
    column: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    saveCard: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    reveal: PropTypes.bool.isRequired,
    stateContext: PropTypes.string.isRequired,
    updateCardColumn: PropTypes.func.isRequired,
    updateCardContext: PropTypes.func.isRequired,
    updateCardDescription: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
};

export default connect(
    CardEditModalContainer,
    actions,
    ( state ) => ( {
        bestIntentions: state.bestIntentions ? state.bestIntentions.toJSON() : {},
        column: state.modalColumn,
        id: state.modalId,
        inProgress: state.inProgress ? state.inProgress.toJSON() : {},
        description: state.modalDescription,
        show: state.modalVisible,
        reveal: state.modalRevealed,
        context: state.modalContext,
        stateContext: state.context,
        toDo: state.toDo ? state.toDo.toJSON() : {},
        userId: state.userId
    } )
);
