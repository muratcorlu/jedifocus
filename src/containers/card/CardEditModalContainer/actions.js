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
    JFDI_CARD_SAVE,
    JFDI_CARD_UPDATE_COLUMN,
    JFDI_CARD_UPDATE_DESCRIPTION,
    JFDI_CARD_UPDATE_CONTEXT
} from '../../../lib/constants';

import {
    sendSaveGoalRequest,
    sendRemoveGoalFromOtherColumnsRequest
} from './network';

import { guidWithTimestamp as guid } from 'tangled';

const saveCard = ( userId, goalContext, goalColumn, goalId, goalDescription, currentContext ) => {
    const oldId = goalId;
    const newId = guid();

    sendSaveGoalRequest( userId, goalContext, goalColumn, newId, goalDescription )
        .then( () => sendRemoveGoalFromOtherColumnsRequest( userId, currentContext, 'done', oldId ) );

    return {
        type: JFDI_CARD_SAVE,
        payload: { goalContext, goalColumn, goalId, newId }
    };
};

const updateCardColumn = ( currentColumn, goalId, nextColumn ) => {
    top();

    return {
        type: JFDI_CARD_UPDATE_COLUMN,
        payload: { currentColumn, goalId, nextColumn }
    };
};

const updateCardDescription = ( column, goalId, goalDescription ) => ( {
    type: JFDI_CARD_UPDATE_DESCRIPTION,
    payload: { column, goalId, goalDescription }
} );

const updateCardContext = ( goalContext ) => ( {
    type: JFDI_CARD_UPDATE_CONTEXT,
    payload: { goalContext }
} );

export { updateCardDescription, updateCardColumn, updateCardContext, saveCard };
