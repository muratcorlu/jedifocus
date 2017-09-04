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
    sendSaveCardRequest,
    sendRemoveCardFromOtherColumnsRequest
} from './network';

import { guidWithTimestamp as guid } from 'tangled';

const saveCard = ( userId, cardContext, cardColumn, cardId, cardDescription, currentContext ) => {
    const oldId = cardId;
    const newId = guid();

    sendSaveCardRequest( userId, cardContext, cardColumn, newId, cardDescription )
        .then( () => sendRemoveCardFromOtherColumnsRequest( userId, currentContext, 'done', oldId ) );

    return {
        type: JFDI_CARD_SAVE,
        payload: { cardContext, cardColumn, cardId, newId }
    };
};

const updateCardColumn = ( currentColumn, cardId, nextColumn ) => {
    top();

    return {
        type: JFDI_CARD_UPDATE_COLUMN,
        payload: { currentColumn, cardId, nextColumn }
    };
};

const updateCardDescription = ( column, cardId, cardDescription ) => ( {
    type: JFDI_CARD_UPDATE_DESCRIPTION,
    payload: { column, cardId, cardDescription }
} );

const updateCardContext = ( cardContext ) => ( {
    type: JFDI_CARD_UPDATE_CONTEXT,
    payload: { cardContext }
} );

export { updateCardDescription, updateCardColumn, updateCardContext, saveCard };
