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
