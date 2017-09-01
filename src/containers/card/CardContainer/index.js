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

import { connect } from 'kink';
import * as actions from './actions';

import Card from '../../../components/card/Card';

const CardContainer = ( {
    item, id, column, userId, context,
    modalId, modalVisible,
    editCard, copyCard, snoozeCard,
    moveCardToBestIntentions, moveCardToToDo, moveCardToInProgress, moveCardToDone
} ) => (
    <Card
        item={item} id={id} column={column} userId={userId} context={context}
        modalId={modalId} modalVisible={modalVisible}
        editCard={editCard} copyCard={copyCard} snoozeCard={snoozeCard}
        moveCardToBestIntentions={moveCardToBestIntentions}
        moveCardToToDo={moveCardToToDo}
        moveCardToInProgress={moveCardToInProgress}
        moveCardToDone={moveCardToDone}
    />
);

CardContainer.propTypes = {
    column: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    copyCard: PropTypes.func.isRequired,
    editCard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    modalId: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    moveCardToBestIntentions: PropTypes.func.isRequired,
    moveCardToDone: PropTypes.func.isRequired,
    moveCardToInProgress: PropTypes.func.isRequired,
    moveCardToToDo: PropTypes.func.isRequired,
    snoozeCard: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
};

export default connect(
    CardContainer,
    actions,
    ( { userId, context, modalId, modalVisible } ) => ( { userId, context, modalId, modalVisible } )
);
