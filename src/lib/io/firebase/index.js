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

import {
    COLUMN_BEST_INTENTIONS,
    COLUMN_IN_PROGRESS,
    COLUMN_TO_DO
} from '../../../lib/constants';

const db = () => window.firebase;

let app = null;
const initialize = ( config ) => {
    if ( app ) { return app; }

    app = db().initializeApp( config );

    return app;
};

const login = ( email, password ) => db().auth()
    .signInWithEmailAndPassword( email, password );

const refGoal = ( userId, context, bucket, goalId ) => `${userId}/${context}/${bucket}/${goalId}`;

const refColumn = ( userId, context, path ) => `${userId}/${context}/${path}`;

const refOnce = ( userId, context, path ) => db().database()
    .ref( refColumn( userId, context, path ) ).once( 'value' )
    .then( ( snapshot ) => snapshot.val() );

const bestIntentions = ( userId, context ) => refOnce( userId, context, COLUMN_BEST_INTENTIONS );

const toDo = ( userId, context ) => refOnce( userId, context, COLUMN_TO_DO );

const inProgress = ( userId, context ) => refOnce( userId, context, COLUMN_IN_PROGRESS );

const saveGoal = ( userId, context, bucket, goalId, item ) => {
    if ( process.env.NODE_ENV !== 'production' ) {
        console.log( 'db:saveGoal', context, bucket, goalId );
    }

    return bucket === 'done' || item.trim() === '' ?
        Promise.resolve() :
        db()
            .database()
            .ref( refGoal( userId, context, bucket, goalId ) )
            .set( item.trim() );
};

const removeGoalFromOtherBuckets = ( userId, context, bucket, goalId ) => {
    if ( process.env.NODE_ENV !== 'production' ) {
        console.log( 'db:removeGoalFromOthers', context, bucket, goalId );
    }

    return Promise.all(
        [ COLUMN_TO_DO, COLUMN_IN_PROGRESS, COLUMN_BEST_INTENTIONS ]
            .filter( ( b ) => b !== bucket )
            .map(
                ( bucketToRemoveFrom ) => db()
                    .database()
                    .ref( refGoal( userId, context, bucketToRemoveFrom, goalId ) )
                    .remove()
            )
    );
};

export {
    bestIntentions,
    inProgress,
    initialize,
    login,
    removeGoalFromOtherBuckets,
    saveGoal,
    toDo
};
