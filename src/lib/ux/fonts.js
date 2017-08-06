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

import FontFaceObserver from 'fontfaceobserver';

const FONT_LOAD_TIMEOUT = 10000;

const inputMonoObserver = new FontFaceObserver( 'Input Mono Cond Lt' );
const georgiaProObserver = new FontFaceObserver( 'Georgia Pro Reg' );

const checkFonts = () => Promise.all( [
    inputMonoObserver.load( null, FONT_LOAD_TIMEOUT ),
    georgiaProObserver.load( null, FONT_LOAD_TIMEOUT )
] )
    .then( () => ( document.body.className = document.body.clasName ?
        `${document.body.className} wf-loaded` :
        'wf-loaded'
    ) )
    .catch( ( err ) => console.log( 'error occured', typeof err ) );

checkFonts();
