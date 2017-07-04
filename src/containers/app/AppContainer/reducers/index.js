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

import { getInitialState } from '../store';
import { createRootReducer } from 'kink';

import * as constants from '../../../../lib/constants';

import addNew from './addNew';
import editCard from './editCard';
import receiveAppState from './receiveAppState';
import saveGoal from './saveGoal';
import updateBucket from './updateBucket';
import updateDescription from './updateDescription';

const rootReducer = createRootReducer( getInitialState, {
    [constants.JFDI_ADD_NEW]: addNew,
    [constants.JFDI_EDIT_CARD]: editCard,
    [constants.JFDI_RECEIVE_APP_STATE]: receiveAppState,
    [constants.JFDI_SAVE_GOAL]: saveGoal,
    [constants.JFDI_UPDATE_BUCKET]: updateBucket,
    [constants.JFDI_UPDATE_DESCRIPTION]: updateDescription
} );

export { rootReducer };
