/*  __.-._
 *  '-._"7'  JediFocus
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

import React from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';

import { firstParentIncludingSelf as parent } from 'dombili';

showdown.setFlavor( 'github' );

const converter = new showdown.Converter( {
    openLinksInNewWindow: true,
    ghMentions: false
} );

const onCardClick = ( evt, column, id, editCard ) => {
    if (
        parent(
            evt.target,
            ( elm ) => elm.nodeName.toLowerCase() === 'a'
        )
    ) { return; }

    evt.preventDefault();
    editCard( column, id );
};

const markdown = ( text ) => converter.makeHtml( text );

const cardClassName = ( id, modalId, modalVisible ) => {
    if ( !modalVisible ) { return 'card card--default'; }

    if ( id === modalId ) { return 'card card--focused'; }

    return 'card card--blurred';
};

const Card = ( {
    description, column, id, passive, modalId, editCard
} ) => (
    <div className={cardClassName( id, modalId, passive )}
        onClick={( evt ) => onCardClick( evt, column, id, editCard )}
    >
        <div className="card__text" dangerouslySetInnerHTML={{ __html: markdown( description ) }} />
    </div>
);

Card.propTypes = {
    column: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    copyCard: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    editCard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    modalId: PropTypes.string.isRequired,
    moveCardToBestIntentions: PropTypes.func.isRequired,
    moveCardToDone: PropTypes.func.isRequired,
    moveCardToInProgress: PropTypes.func.isRequired,
    moveCardToToDo: PropTypes.func.isRequired,
    passive: PropTypes.bool.isRequired,
    snoozeCard: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
};

export default Card;
