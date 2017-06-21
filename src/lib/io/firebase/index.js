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

export { initialize, login, bestIntentions, toDo, inProgress, done };
