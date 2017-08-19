/*  __.-._
 *  '-._"7'  Jedi Focus
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

import { getInitialState } from '../../store';
import { createRootReducer } from 'kink';

import * as constants from '../../lib/constants';

import addNew from './addNew';
import changeContext from './changeContext';
import copyCard from './copyCard';
import editCard from './editCard';
import moveToBestIntentions from './moveToBestIntentions';
import moveToDone from './moveToDone';
import moveToInProgress from './moveToInProgress';
import moveToToDo from './moveToToDo';
import receiveAppState from './receiveAppState';
import saveGoal from './saveGoal';
import search from './search';
import snoozeCard from './snoozeCard';
import updateBucket from './updateBucket';
import updateContext from './updateContext';
import updateDescription from './updateDescription';
import updateGoalContext from './updateGoalContext';

const rootReducer = createRootReducer( getInitialState, {
    [constants.JFDI_APP_CHANGE_CONTEXT]: changeContext,
    [constants.JFDI_APP_RECEIVE_STATE]: receiveAppState,
    [constants.JFDI_APP_UPDATE_CONTEXT]: updateContext,
    [constants.JFDI_CARD_ADD_NEW]: addNew,
    [constants.JFDI_CARD_COPY]: copyCard,
    [constants.JFDI_CARD_EDIT]: editCard,
    [constants.JFDI_CARD_MOVE_BEST_INTENTIONS]: moveToBestIntentions,
    [constants.JFDI_CARD_MOVE_DONE]: moveToDone,
    [constants.JFDI_CARD_MOVE_IN_PROGRESS]: moveToInProgress,
    [constants.JFDI_CARD_MOVE_TO_DO]: moveToToDo,
    [constants.JFDI_CARD_SNOOZE]: snoozeCard,
    [constants.JFDI_GOAL_SAVE]: saveGoal,
    [constants.JFDI_GOAL_UPDATE_BUCKET]: updateBucket,
    [constants.JFDI_GOAL_UPDATE_CONTEXT]: updateGoalContext,
    [constants.JFDI_GOAL_UPDATE_DESCRIPTION]: updateDescription,
    [constants.JFDI_SEARCH]: search
} );

export { rootReducer };
