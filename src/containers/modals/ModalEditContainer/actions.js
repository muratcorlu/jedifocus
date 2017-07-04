/*
 * ▬▬ι═══════ﺤJediFocus-═══════ι▬▬
 *   use the source to get things done
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bit.ly/bytesized
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io                                                     l
 */

import { fromJS as makeImmutable } from 'immutable';

import {
    JFDI_SAVE_GOAL,
    JFDI_UPDATE_BUCKET,
    JFDI_UPDATE_DESCRIPTION
} from '../../../lib/constants';

import { sendSaveAllRequest } from './network';

const saveGoal = ( data ) => {
    sendSaveAllRequest( data );

    return { type: JFDI_SAVE_GOAL };
};
const updateBucket = ( currentBucket, id, nextBucket ) => ( {
    type: JFDI_UPDATE_BUCKET,
    payload: makeImmutable( { currentBucket, id, nextBucket } )
} );

const updateDescription = ( bucket, id, value ) => ( {
    type: JFDI_UPDATE_DESCRIPTION,
    payload: makeImmutable( { bucket, id, value } )
} );

export { updateDescription, updateBucket, saveGoal };
