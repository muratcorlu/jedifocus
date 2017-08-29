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

import { tick, untick } from 'dombili';

let tickId = null;

const top = () => {
    untick( tickId );
    tickId = tick( () => Array.prototype.slice.call(
        document.querySelectorAll( '.column__body' ) ).forEach( ( column ) => {
        column.scrollTop = 0;
    } ) );
};

export { top };
