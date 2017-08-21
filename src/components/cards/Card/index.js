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
import {
    COLUMN_BEST_INTENTIONS,
    COLUMN_IN_PROGRESS,
    COLUMN_TO_DO,
    COLUMN_DONE
} from '../../../lib/constants/index';

showdown.setFlavor( 'github' );

const converter = new showdown.Converter( {
    openLinksInNewWindow: true
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

const Card = ( {
    item, column, id, userId, context,
    editCard, copyCard, /* snoozeCard, */
    moveCardToBestIntentions, moveCardToToDo, moveCardToInProgress, moveCardToDone
} ) => (
    <div className="card" onClick={( evt ) => onCardClick( evt, column, id, editCard )}>
        <div className="card__text" dangerouslySetInnerHTML={{ __html: markdown( item ) }} />
        <div className="card-controls" onClick={( evt ) => evt.stopPropagation()}>
            <a href="#" className="card-link card-link--left"
                onClick={() => copyCard( column, id )}
                title="Copy this goal into a new goal."
            ><img src="/images/icons/copy.png" alt="Copy Icon" title="Copy this goal into a new goal." /></a>

            {/* <a href="#" className="card-controls__link card-controls__left-link" */}
            {/* onClick={() => snoozeCard( bucket, id )} */}
            {/* title="Defer this goal until later." */}
            {/* ><img src="/images/clock.png" alt="Clock Icon" title="Defer this goal until later." /></a> */}

            <a className={`
                card-link
                ${column === COLUMN_BEST_INTENTIONS ?
        'card-link--best-intentions-selected' : 'card-link--best-intentions'}
            `}
            title={`${column === COLUMN_BEST_INTENTIONS ? '' : 'Move this goal to “best intentions”.'}`}
            onClick={() => {
                if ( column === COLUMN_BEST_INTENTIONS ) { return; }
                moveCardToBestIntentions( id, userId, column, item, context );
            }}
            >bi</a>

            <span className="card-controls__transition"><img src="/images/icons/right.png" /></span>

            <a className={`
                card-link
                ${column === COLUMN_TO_DO ?
        'card-link--to-do-selected' : 'card-link--to-do'}
            `}
            title={`${column === COLUMN_TO_DO ? '' : 'Move this goal to “to do”.'}`}
            onClick={() => {
                if ( column === COLUMN_TO_DO ) { return; }
                moveCardToToDo( id, userId, column, item, context );
            }}
            >td</a>

            <span className="card-controls__transition"><img src="/images/icons/right.png" /></span>

            <a className={`
                card-link
                ${column === COLUMN_IN_PROGRESS ?
        'card-link--in-progress-selected' : 'card-link--in-progress'}
            `}
            title={`${column === COLUMN_IN_PROGRESS ? '' : 'Move this goal to “in progress”.'}`}
            onClick={() => {
                if ( column === COLUMN_IN_PROGRESS ) { return; }
                moveCardToInProgress( id, userId, column, item, context );
            }}
            >ip</a>

            <span className="card-controls__transition"><img src="/images/icons/right.png" /></span>

            <a className={`
                card-link
                ${column === COLUMN_DONE ?
        'card-link--done-selected' : 'card-link--done'}
            `}
            title={`${column === COLUMN_IN_PROGRESS ? '' : 'I’m “done” with this goal!'}`}
            onClick={() => {
                if ( column === COLUMN_DONE ) { return; }
                moveCardToDone( id, userId, column, item, context );
            }}
            >✓</a>
        </div>
    </div> );

Card.propTypes = {
    column: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    copyCard: PropTypes.func.isRequired,
    editCard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    moveCardToBestIntentions: PropTypes.func.isRequired,
    moveCardToDone: PropTypes.func.isRequired,
    moveCardToInProgress: PropTypes.func.isRequired,
    moveCardToToDo: PropTypes.func.isRequired,
    snoozeCard: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
};

export default Card;
