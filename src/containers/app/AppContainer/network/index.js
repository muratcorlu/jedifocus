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
