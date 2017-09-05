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

import { guidWithTimestamp as guid } from 'tangled';

const copyCard = ( state = {}, { payload: { column, id } } ) => ( {
    ...state,
    modalVisible: true,
    modalRevealed: false,
    modalContextVisible: false,
    modalId: guid(),
    modalDescription: state[column].get( id )
} );

export default copyCard;
