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

const updateContext = ( state = {}, { payload } ) => {
    console.log( payload.toJSON() );

    return ( {
        ...state,
        appStateFetched: false,
        modalContextVisible: true,
        context: payload.get( 'context' )
    } );
};

export default updateContext;