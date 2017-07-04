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

import * as db from '../../../../lib/io/firebase';

let whenDbFetched = null;

const sendFetchAppStateRequest = ( config, email, password ) => {
    db.initialize( config );

    if ( whenDbFetched ) {
        return whenDbFetched;
    }

    whenDbFetched = db
        .login( email, password )
        .then( () => Promise.all( [
            db.bestIntentions(),
            db.toDo(),
            db.inProgress()
        ] ) );

    return whenDbFetched;
};

export { sendFetchAppStateRequest };
