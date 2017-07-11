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

import {
    firstParentIncludingSelf as parent,
    selectFirst as select,
    tick, untick
} from 'dombili';

const findModalHeading = ( elm ) => elm.className === 'modal-edit__heading';

const initializeState = ( component ) => {
    component.start = { clientX: 0, clientY: 0, left: 0, top: 0 };
    component.modal = null;
    component.dragging = false;
    component.tickId = 0;
};

const onMouseDown = ( evt, component ) => {
    const target = parent( evt.target, findModalHeading );

    if ( !target ) { return; }

    component.modal = select( '.modal-edit' );

    if ( !component.modal ) { return; }

    evt.preventDefault();

    component.dragging = true;
    component.start.clientX = evt.clientX;
    component.start.clientY = evt.clientY;
    component.start.left = parseInt( component.modal.style.left, 10 ) || 0;
    component.start.top = parseInt( component.modal.style.top, 10 ) || 0;
};

const onMouseUp = ( evt, component ) => { component.dragging = false; };

const onMouseMove = ( evt, component ) => {
    if ( !component.dragging ) { return; }
    if ( !component.modal ) { return; }

    untick( component.tickId );
    component.tickId = tick( () => {
        if ( !component.modal ) { return; }

        component.modal.style.left = `${component.start.left + evt.clientX - component.start.clientX}px`;
        component.modal.style.top = `${component.start.top + evt.clientY - component.start.clientY}px`;
    } );
};

export {
    onMouseDown,
    onMouseMove,
    onMouseUp,
    initializeState
};
