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

import { fromJS as makeImmutable } from 'immutable';

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

const saveGoal = ( userId, context, column, goalId, item, currentContext ) => {
    sendSaveGoalRequest( userId, context, column, goalId, item )
        .then( () => {
            if ( context !== currentContext ) {
                return sendRemoveGoalFromOtherColumnsRequest( userId, currentContext, 'done', goalId );
            }

            return sendRemoveGoalFromOtherColumnsRequest( userId, currentContext, column, goalId );
        } );

    return {
        type: JFDI_CARD_SAVE,
        payload: makeImmutable( { context, column, goalId } )
    };
};

const updateColumn = ( currentColumn, id, nextColumn ) => ( {
    type: JFDI_CARD_UPDATE_COLUMN,
    payload: makeImmutable( { currentColumn, id, nextColumn } )
} );

const updateDescription = ( column, id, value ) => ( {
    type: JFDI_CARD_UPDATE_DESCRIPTION,
    payload: makeImmutable( { column, id, value } )
} );

const updateContext = ( column, id, context ) => ( {
    type: JFDI_CARD_UPDATE_CONTEXT,
    payload: makeImmutable( { column, id, context } )
} );

export { updateDescription, updateColumn, updateContext, saveGoal };
