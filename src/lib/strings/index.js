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

/* eslint-disable no-bitwise */

import { GUID_SEPARATOR } from '../../lib/constants';

const guid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, ( c ) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : ( r & 0x3 | 0x8 );

    return v.toString( 16 );
} );
/* eslint-enable no-bitwise */

const timestamp = () => `${( new Date() ).getTime()}`;

const guidWithTimestamp = () => `${guid()}${GUID_SEPARATOR}${timestamp()}`;

const getTimestampFromGuid = ( timestampedGuid ) =>
    parseInt( timestampedGuid.split( GUID_SEPARATOR )[ 1 ], 10 );

export { guid, timestamp, guidWithTimestamp, getTimestampFromGuid };
