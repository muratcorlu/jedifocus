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

import { JFDI_CARD_ADD_NEW, JFDI_APP_CHANGE_CONTEXT, JFDI_SEARCH } from '../../../lib/constants';

const addNew = () => ( { type: JFDI_CARD_ADD_NEW } );

const search = () => ( { type: JFDI_SEARCH } );

const changeContext = () => ( { type: JFDI_APP_CHANGE_CONTEXT } );

export { addNew, search, changeContext };
