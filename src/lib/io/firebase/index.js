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

const initialize = ( config ) => window.firebase.initializeApp( config );

const login = ( email, password ) => window.firebase.auth()
    .signInWithEmailAndPassword( email, password );

const ref = ( userId, context, path ) => `${userId}/${context}/${path}`;

const refOnce = ( userId, context, path ) => window.firebase.database()
    .ref( ref( userId, context, path ) ).once( 'value' )
    .then( ( snapshot ) => snapshot.val() );

const bestIntentions = ( userId, context ) => refOnce( userId, context, 'bestIntentions' );

const toDo = ( userId, context ) => refOnce( userId, context, 'toDo' );

const inProgress = ( userId, context ) => refOnce( userId, context, 'inProgress' );

const saveItem = ( userId, context, path, data ) => window.firebase.database()
    .ref( ref( userId, context, path ) )
    .set( data );

const saveToDo = ( userId, context, data ) => saveItem( userId, context, 'toDo', data );
const saveInProgress = ( userId, context, data ) => saveItem( userId, context, 'inProgress', data );
const saveBestIntentions = ( userId, context, data ) => saveItem( userId, context, 'bestIntentions', data );

const saveAll = ( userId, context, data ) => {
    saveToDo( userId, context, data.toDo );
    saveInProgress( userId, context, data.inProgress );
    saveBestIntentions( userId, context, data.bestIntentions );
};

export { initialize, login, bestIntentions, toDo, inProgress, saveAll };
