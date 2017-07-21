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

import { JFDI_UPDATE_CONTEXT } from '../../../lib/constants';

const changeContext = ( context ) => ( {
    type: JFDI_UPDATE_CONTEXT,
    payload: makeImmutable( { context } )
} );

export { changeContext };