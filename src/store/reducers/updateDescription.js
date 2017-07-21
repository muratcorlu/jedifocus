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

const updateDescription = ( state = {}, { payload } ) => ( {
    ...state,
    modalVisible: true,
    modalItem: payload.get( 'value' ),
    [ payload.get( 'bucket' ) ]: state[ payload.get( 'bucket' ) ]
        .set( payload.get( 'id' ), payload.get( 'value' ) )
} );

export default updateDescription;