/*  __.-._
 *  '-._"7'  Jedi Focus
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

import {
    JFDI_CARD_COPY,
    JFDI_CARD_EDIT,
    JFDI_CARD_SNOOZE,
    JFDI_CARD_MOVE_BEST_INTENTIONS,
    JFDI_CARD_MOVE_TO_DO,
    JFDI_CARD_MOVE_IN_PROGRESS,
    JFDI_CARD_MOVE_DONE,
    COLUMN_DONE,
    COLUMN_IN_PROGRESS,
    COLUMN_BEST_INTENTIONS,
    COLUMN_TO_DO
} from '../../../lib/constants';

import {
    sendSaveGoalRequest,
    sendRemoveFromOtherBucketsRequest
} from './network';

const copyCard = ( column, id ) => ( { type: JFDI_CARD_COPY, payload: { bucket: column, id } } );

const editCard = ( column, id ) => ( { type: JFDI_CARD_EDIT, payload: { bucket: column, id } } );

const moveCardToBestIntentions = ( id, userId, column, item, context ) => {
    sendSaveGoalRequest( userId, context, COLUMN_BEST_INTENTIONS, id, item.trim() )
        .then( () => sendRemoveFromOtherBucketsRequest( userId, context, COLUMN_BEST_INTENTIONS, id ) );

    return { type: JFDI_CARD_MOVE_BEST_INTENTIONS, payload: { bucket: column, id } };
};

const moveCardToDone = ( id, userId, column, item, context ) => {
    sendSaveGoalRequest( userId, context, COLUMN_DONE, id, item.trim() )
        .then( () => sendRemoveFromOtherBucketsRequest( userId, context, COLUMN_DONE, id ) );

    return { type: JFDI_CARD_MOVE_DONE, payload: { bucket: column, id } };
};

const moveCardToInProgress = ( id, userId, column, item, context ) => {
    sendSaveGoalRequest( userId, context, COLUMN_IN_PROGRESS, id, item.trim() )
        .then( () => sendRemoveFromOtherBucketsRequest( userId, context, COLUMN_IN_PROGRESS, id ) );

    return { type: JFDI_CARD_MOVE_IN_PROGRESS, payload: { bucket: column, id } };
};

const moveCardToToDo = ( id, userId, column, item, context ) => {
    sendSaveGoalRequest( userId, context, COLUMN_TO_DO, id, item.trim() )
        .then( () => sendRemoveFromOtherBucketsRequest( userId, context, COLUMN_TO_DO, id ) );

    return { type: JFDI_CARD_MOVE_TO_DO, payload: { bucket: column, id } };
};

const snoozeCard = ( bucket, id ) => ( { type: JFDI_CARD_SNOOZE, payload: { bucket, id } } );

export {
    copyCard,
    editCard,
    snoozeCard,
    moveCardToBestIntentions,
    moveCardToToDo,
    moveCardToInProgress,
    moveCardToDone
};
