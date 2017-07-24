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
import updateContext from './updateContext';
import updateDescription from './updateDescription';
import updateGoalContext from './updateGoalContext';

const rootReducer = createRootReducer( getInitialState, {
    [constants.JFDI_APP_CHANGE_CONTEXT]: changeContext,
    [constants.JFDI_APP_RECEIVE_STATE]: receiveAppState,
    [constants.JFDI_APP_UPDATE_CONTEXT]: updateContext,
    [constants.JFDI_CARD_ADD_NEW]: addNew,
    [constants.JFDI_CARD_EDIT]: editCard,
    [constants.JFDI_GOAL_SAVE]: saveGoal,
    [constants.JFDI_GOAL_UPDATE_BUCKET]: updateBucket,
    [constants.JFDI_GOAL_UPDATE_CONTEXT]: updateGoalContext,
    [constants.JFDI_GOAL_UPDATE_DESCRIPTION]: updateDescription
} );

export { rootReducer };
