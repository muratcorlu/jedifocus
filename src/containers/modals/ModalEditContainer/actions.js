/*   __
 *  |::|    Jedi Focus
 *  |::|
 * _|//|_  Do. Or do not.
 * |____|  There is no try.
 *  || |
 *  | ||   This project is a part of the “Byte-Sized JavaScript” videocasts.
 *  | ||   You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *  || |
 *  || |   MIT Licensed — See LICENSE.md
 *  || |
 *  | ||   Send your comments, suggestions, and feedback to me@volkan.io
 *  ||||
 */

import { fromJS as makeImmutable } from 'immutable';

import {
    JFDI_SAVE_GOAL,
    JFDI_UPDATE_BUCKET,
    JFDI_UPDATE_DESCRIPTION,
    JFDI_UPDATE_GOAL_CONTEXT
} from '../../../lib/constants';

import {
    sendSaveGoalRequest,
    sendRemoveFromOtherBucketsRequest
} from './network';

const saveGoal = ( userId, context, bucket, goalId, item, currentContext ) => {
    sendSaveGoalRequest( userId, context, bucket, goalId, item )
        .then( () => {
            if ( context !== currentContext ) {
                return sendRemoveFromOtherBucketsRequest( userId, currentContext, 'done', goalId );
            }

            return sendRemoveFromOtherBucketsRequest( userId, currentContext, bucket, goalId );
        } );

    return {
        type: JFDI_SAVE_GOAL,
        payload: makeImmutable( { context, bucket, goalId } )
    };
};

const updateBucket = ( currentBucket, id, nextBucket ) => ( {
    type: JFDI_UPDATE_BUCKET,
    payload: makeImmutable( { currentBucket, id, nextBucket } )
} );

const updateDescription = ( bucket, id, value ) => ( {
    type: JFDI_UPDATE_DESCRIPTION,
    payload: makeImmutable( { bucket, id, value } )
} );

const updateContext = ( bucket, id, context ) => ( {
    type: JFDI_UPDATE_GOAL_CONTEXT,
    payload: makeImmutable( { bucket, id, context } )
} );

export { updateDescription, updateBucket, updateContext, saveGoal };
