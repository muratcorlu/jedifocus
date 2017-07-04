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

const login = ( email, password ) => window.firebase
    .auth().signInWithEmailAndPassword( email, password );

const refOnce = ( path ) => window.firebase.database()
    .ref( path ).once( 'value' )
    .then( ( snapshot ) => snapshot.val() );

const bestIntentions = () => refOnce( '/bestIntentions' );

const toDo = () => refOnce( '/toDo' );

const inProgress = () => refOnce( '/inProgress' );

const done = () => refOnce( '/done' );

const saveItem = ( path, data ) => window.firebase.database().ref( path ).set( data );

const saveToDo = ( data ) => saveItem( '/toDo', data );
const saveInProgress = ( data ) => saveItem( '/inProgress', data );
const saveBestIntentions = ( data ) => saveItem( '/bestIntentions', data );

const saveAll = ( data ) => {
    saveToDo( data.toDo );
    saveInProgress( data.inProgress );
    saveBestIntentions( data.bestIntentions );
};

export { initialize, login, bestIntentions, toDo, inProgress, done, saveAll };
