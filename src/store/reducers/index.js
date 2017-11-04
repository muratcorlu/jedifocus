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

import { getInitialState } from '../../store';
import { createRootReducer } from 'kink';

import * as constants from '../../lib/constants';

import requestAppState from './app/requestAppState';
import receiveAppState from './app/receiveAppState';
import updateAppContext from './app/updateAppContext';
import revealModal from './app/revealModal';
import hideModal from './app/hideModal';

import addNewCard from './card/addNewCard';
import changeCardContext from './card/changeCardContext';
import copyCard from './card/copyCard';
import editCard from './card/editCard';
import moveCardToBestIntentions from './card/moveCardToBestIntentions';
import moveCardToDone from './card/moveCardToDone';
import moveCardToInProgress from './card/moveCardToInProgress';
import moveCardToToDo from './card/moveCardToToDo';
import saveCard from './card/saveCard';
import updateCardColumn from './card/updateCardColumn';
import updateCardContext from './card/updateCardContext';
import updateCardDescription from './card/updateCardDescription';
import switchCardToMoveMode from './card/switchCardToMoveMode';

const rootReducer = createRootReducer( getInitialState, {
    [constants.JFDI_APP_REQUEST_STATE]: requestAppState,
    [constants.JFDI_APP_CHANGE_CONTEXT]: changeCardContext,
    [constants.JFDI_APP_HIDE_MODAL]: hideModal,
    [constants.JFDI_APP_RECEIVE_STATE]: receiveAppState,
    [constants.JFDI_APP_REVEAL_MODAL]: revealModal,
    [constants.JFDI_APP_UPDATE_CONTEXT]: updateAppContext,
    [constants.JFDI_CARD_ADD_NEW]: addNewCard,
    [constants.JFDI_CARD_COPY]: copyCard,
    [constants.JFDI_CARD_EDIT]: editCard,
    [constants.JFDI_CARD_MOVE_BEST_INTENTIONS]: moveCardToBestIntentions,
    [constants.JFDI_CARD_MOVE_DONE]: moveCardToDone,
    [constants.JFDI_CARD_MOVE_IN_PROGRESS]: moveCardToInProgress,
    [constants.JFDI_CARD_MOVE_TO_DO]: moveCardToToDo,
    [constants.JFDI_CARD_SAVE]: saveCard,
    [constants.JFDI_CARD_UPDATE_COLUMN]: updateCardColumn,
    [constants.JFDI_CARD_UPDATE_CONTEXT]: updateCardContext,
    [constants.JFDI_CARD_UPDATE_DESCRIPTION]: updateCardDescription,
    [constants.JFDI_CARD_SWITCH_MODE_MOVE]: switchCardToMoveMode
} );

export { rootReducer };
