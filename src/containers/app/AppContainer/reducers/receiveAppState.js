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

import { Map } from 'immutable';

const receiveAppState = ( state = {}, { payload } ) => ( {
    ...state,
    appStateFetched: true,
    bestIntentions: payload.get( 'bestIntentions' ) || Map.of(),
    toDo: payload.get( 'toDo' ) || Map.of(),
    inProgress: payload.get( 'inProgress' ) || Map.of()
} );

export default receiveAppState;
