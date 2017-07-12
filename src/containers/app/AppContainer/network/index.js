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

import * as db from '../../../../lib/io/firebase';

let whenDbFetched = null;

const sendFetchAppStateRequest = ( config, email, password, userId, context ) => {
    db.initialize( config );

    if ( whenDbFetched ) {
        return whenDbFetched;
    }

    whenDbFetched = db
        .login( email, password )
        .then( () => Promise.all( [
            db.bestIntentions( userId, context ),
            db.toDo( userId, context ),
            db.inProgress( userId, context )
        ] ) );

    return whenDbFetched;
};

export { sendFetchAppStateRequest };
