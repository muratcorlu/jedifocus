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

import { getInitialState } from '../../store';
import { createRootReducer } from 'kink';

import * as constants from '../../lib/constants';

import addNew from './addNew';
import changeContext from './changeContext';
import editCard from './editCard';
import receiveAppState from './receiveAppState';
import saveGoal from './saveGoal';
import updateBucket from './updateBucket';
import updateDescription from './updateDescription';

const rootReducer = createRootReducer( getInitialState, {
    [constants.JFDI_ADD_NEW]: addNew,
    [constants.JFDI_CHANGE_CONTEXT]: changeContext,
    [constants.JFDI_EDIT_CARD]: editCard,
    [constants.JFDI_RECEIVE_APP_STATE]: receiveAppState,
    [constants.JFDI_SAVE_GOAL]: saveGoal,
    [constants.JFDI_UPDATE_BUCKET]: updateBucket,
    [constants.JFDI_UPDATE_DESCRIPTION]: updateDescription
} );

export { rootReducer };
