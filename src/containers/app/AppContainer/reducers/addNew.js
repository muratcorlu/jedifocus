/*
 * ▬▬ι═══════ﺤJediFocus-═══════ι▬▬
 *   use the source to get things done
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bit.ly/bytesized
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io                                                     l
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
    modalId: guid(),
    modalItem: '',
    modalBucket: 'bestIntentions'
} );

export default addNew;
