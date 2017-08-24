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

import { guid } from '../../../lib/strings';

const copyCard = ( state = {}, { payload: { column, id } } ) => ( {
    ...state,
    modalVisible: true,
    modalContextVisible: false,
    modalId: guid(),
    modalItem: state[ column ].get( id )
} );

export default copyCard;
