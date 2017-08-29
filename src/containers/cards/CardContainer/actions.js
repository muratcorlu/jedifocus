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

import { top } from '../../../lib/dom';

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
    sendRemoveGoalFromOtherColumnsRequest
} from './network';

const copyCard = ( column, id ) => {
    top();

    return { type: JFDI_CARD_COPY, payload: { column, id } };
};

const editCard = ( column, id ) => {
    top();

    return { type: JFDI_CARD_EDIT, payload: { column, id } };
};

const save = ( id, userId, context, column, item ) =>
    sendSaveGoalRequest( userId, context, column, id, item.trim() )
        .then( () => sendRemoveGoalFromOtherColumnsRequest( userId, context, column, id ) );

const moveCardToBestIntentions = ( id, userId, column, item, context ) => {
    top();

    save( id, userId, context, COLUMN_BEST_INTENTIONS, item );

    return { type: JFDI_CARD_MOVE_BEST_INTENTIONS, payload: { column, id } };
};

const moveCardToDone = ( id, userId, column, item, context ) => {
    top();

    save( id, userId, context, COLUMN_DONE, item );

    return { type: JFDI_CARD_MOVE_DONE, payload: { column, id } };
};

const moveCardToInProgress = ( id, userId, column, item, context ) => {
    top();

    save( id, userId, context, COLUMN_IN_PROGRESS, item );

    return { type: JFDI_CARD_MOVE_IN_PROGRESS, payload: { column, id } };
};

const moveCardToToDo = ( id, userId, column, item, context ) => {
    top();

    save( id, userId, context, COLUMN_TO_DO, item );

    return { type: JFDI_CARD_MOVE_TO_DO, payload: { column, id } };
};

const snoozeCard = ( column, id ) => ( {
    type: JFDI_CARD_SNOOZE,
    payload: { column, id }
} );

export {
    copyCard,
    editCard,
    moveCardToBestIntentions,
    moveCardToDone,
    moveCardToInProgress,
    moveCardToToDo,
    snoozeCard
};
