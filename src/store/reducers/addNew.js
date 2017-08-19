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

/* eslint-disable no-bitwise */
const guid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, ( c ) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : ( r & 0x3 | 0x8 );

    return v.toString( 16 );
} );
/* eslint-enable no-bitwise */

const addNew = ( state = {} ) => ( {
    ...state,
    modalVisible: true,
    modalContextVisible: false,
    modalId: guid(),
    modalItem: '',
    modalBucket: 'bestIntentions',
    modalContext: state.context
} );

export default addNew;
