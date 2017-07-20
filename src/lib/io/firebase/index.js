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

const db = () => window.firebase;

const initialize = ( config ) => db().initializeApp( config );

const login = ( email, password ) => db().auth()
    .signInWithEmailAndPassword( email, password );

const refGoal = ( userId, context, bucket, goalId ) => `${userId}/${context}/${bucket}/${goalId}`;

const refColumn = ( userId, context, path ) => `${userId}/${context}/${path}`;

const refOnce = ( userId, context, path ) => db().database()
    .ref( refColumn( userId, context, path ) ).once( 'value' )
    .then( ( snapshot ) => snapshot.val() );

const bestIntentions = ( userId, context ) => refOnce( userId, context, 'bestIntentions' );

const toDo = ( userId, context ) => refOnce( userId, context, 'toDo' );

const inProgress = ( userId, context ) => refOnce( userId, context, 'inProgress' );

const saveItem = ( userId, context, path, data ) => db().database()
    .ref( refColumn( userId, context, path ) )
    .set( data );

// refactor bucket names as symbolic constants.
const saveToDo = ( userId, context, data ) => saveItem( userId, context, 'toDo', data );
const saveInProgress = ( userId, context, data ) => saveItem( userId, context, 'inProgress', data );
const saveBestIntentions = ( userId, context, data ) => saveItem( userId, context, 'bestIntentions', data );

const saveAll = ( userId, context, data ) => {
    saveToDo( userId, context, data.toDo );
    saveInProgress( userId, context, data.inProgress );
    saveBestIntentions( userId, context, data.bestIntentions );
};

const saveGoal = ( userId, context, bucket, goalId, item ) => bucket === 'done' ? Promise.resolve() :
    db()
        .database()
        .ref( refGoal( userId, context, bucket, goalId ) )
        .set( item );

const removeGoalFromOtherBuckets = ( userId, context, bucket, goalId ) => Promise.all(
    [ 'toDo', 'inProgress', 'bestIntentions' ]
        .filter( ( b ) => b !== bucket )
        .map(
            ( bucketToRemoveFrom ) => db()
                .database()
                .ref( refGoal( userId, context, bucketToRemoveFrom, goalId ) )
                .remove()
        )
);

export {
    bestIntentions,
    inProgress,
    initialize,
    login,
    removeGoalFromOtherBuckets,
    saveAll,
    saveGoal,
    toDo
};
