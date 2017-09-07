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

import { tick } from 'dombili';

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
    COLUMN_TO_DO,
    JFDI_APP_REVEAL_MODAL
} from '../../../lib/constants';

import { guidWithTimestamp as guid } from 'tangled';

import {
    sendSaveCardRequest,
    sendRemoveCardFromOtherColumnsRequest
} from './network';

const copyCard = ( column, id ) => {
    top();

    return { type: JFDI_CARD_COPY, payload: { column, id } };
};

const editCard = ( column, id ) => ( dispatch ) => {
    top();

    dispatch( { type: JFDI_CARD_EDIT, payload: { column, id } } );
    tick( () => dispatch( { type: JFDI_APP_REVEAL_MODAL } ) );
};

const save = ( oldId, newId, userId, context, column, description ) =>
    sendSaveCardRequest( userId, context, column, newId, description.trim() )
        .then( () => sendRemoveCardFromOtherColumnsRequest( userId, context, column, oldId ) );

const moveCardToBestIntentions = ( id, userId, column, description, context ) => {
    top();

    const oldId = id;
    const newId = guid();

    save( oldId, newId, userId, context, COLUMN_BEST_INTENTIONS, description );

    return { type: JFDI_CARD_MOVE_BEST_INTENTIONS, payload: { column, oldId, newId } };
};

const moveCardToDone = ( id, userId, column, description, context ) => {
    top();

    const oldId = id;
    const newId = guid();

    save( oldId, newId, userId, context, COLUMN_DONE, description );

    return { type: JFDI_CARD_MOVE_DONE, payload: { column, oldId, newId } };
};

const moveCardToInProgress = ( id, userId, column, description, context ) => {
    top();

    const oldId = id;
    const newId = guid();

    save( oldId, newId, userId, context, COLUMN_IN_PROGRESS, description );

    return { type: JFDI_CARD_MOVE_IN_PROGRESS, payload: { column, oldId, newId } };
};

const moveCardToToDo = ( id, userId, column, description, context ) => {
    top();

    const oldId = id;
    const newId = guid();

    save( oldId, newId, userId, context, COLUMN_TO_DO, description );

    return { type: JFDI_CARD_MOVE_TO_DO, payload: { column, oldId, newId } };
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
