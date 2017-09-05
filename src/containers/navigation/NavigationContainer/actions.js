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

import { tick } from 'dombili';

import { top } from '../../../lib/dom';

import {
    JFDI_CARD_ADD_NEW,
    JFDI_APP_CHANGE_CONTEXT,
    JFDI_APP_REVEAL_MODAL
} from '../../../lib/constants';

const addNew = () => ( dispatch ) => {
    top();

    dispatch( { type: JFDI_CARD_ADD_NEW } );
    tick( () => dispatch( { type: JFDI_APP_REVEAL_MODAL } ) );
};

const changeContext = () => ( dispatch ) => {
    top();

    dispatch( { type: JFDI_APP_CHANGE_CONTEXT } );
    tick( () => dispatch( { type: JFDI_APP_REVEAL_MODAL } ) );
};

export { addNew, changeContext };
