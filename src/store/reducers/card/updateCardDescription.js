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

const updateCardDescription = ( state = {}, { payload: { column, cardId, cardDescription, cardContext } } ) => {
    if ( state.context === cardContext ) {
        return {
            ...state,
            modalDescription: cardDescription,
            [column]: state[column].set( cardId, cardDescription )
        };
    }

    return {
        ...state,
        modalDescription: cardDescription,
        [column]: state[column].remove( cardId, cardDescription )
    };
};

export default updateCardDescription;
