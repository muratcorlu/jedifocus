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

const cardLinkModifiedClassName = ( modalVisible, className ) => modalVisible ? `${className}-no-hover` : className;

const cardLinkClassName = ( modalVisible, linkColumn, column ) => {
    const shouldSelect = column === linkColumn;

    switch ( linkColumn ) {
    case COLUMN_BEST_INTENTIONS:
        return cardLinkModifiedClassName(
            modalVisible,
            shouldSelect ? 'card-link card-link--best-intentions-selected' : 'card-link card-link--best-intentions'
        );
    case COLUMN_TO_DO:
        return cardLinkModifiedClassName(
            modalVisible,
            shouldSelect ? 'card-link card-link--to-do-selected' : 'card-link card-link--to-do'
        );
    case COLUMN_IN_PROGRESS:
        return cardLinkModifiedClassName(
            modalVisible,
            shouldSelect ? 'card-link card-link--in-progress-selected' : 'card-link card-link--in-progress'
        );
    case COLUMN_DONE:
        return cardLinkModifiedClassName(
            modalVisible,
            shouldSelect ? 'card-link card-link--done-selected' : 'card-link card-link--done'
        );
    default:
        return '';
    }
};

const cardControlsClassName = ( passive ) => passive ?
    'card-controls card-controls--passive' : 'card-controls';

const Card = ( {
    description, column, id, userId, context,
    passive, modalId,
    editCard, copyCard, /* snoozeCard, */
    moveCardToBestIntentions, moveCardToToDo, moveCardToInProgress, moveCardToDone
} ) => (
    <div className={cardClassName( id, modalId, passive )}
        onClick={( evt ) => onCardClick( evt, column, id, editCard )}
    >
        <div className="card__overlay" style={{visibility: 'hidden'}}>
            {column === 'inProgress' ? <a href="" style={{fontSize: '16px', lineHeight: '16px', position: 'relative', top: '-5px'}}>✕</a> : <a href="">⭢</a>}
        </div>
        
        {column === 'bestIntentions' ? null :  <div className="card__overlay-left" style={{visibility: 'hidden'}}><a href="">⟵</a></div>}

        <div className="card__overlay-options" style={{visibility: 'hidden'}}>
            <a href="" style={{fontSize: '18px', position: 'relative', top: '-3px', lineHeight: '24px'}}>…</a>
        </div>

        <div className="card__text" dangerouslySetInnerHTML={{ __html: markdown( description ) }} />
        <div
            className={cardControlsClassName( passive )}
            onClick={( evt ) => evt.stopPropagation()}
        >
            <a href="#" className="card-link card-link--left"
                onClick={() => copyCard( column, id )}
                title="Copy this goal into a new goal."
            ><img src="/images/icons/copy.png" alt="Copy Icon" title="Copy this goal into a new goal." /></a>

            <a className={cardLinkClassName( passive, COLUMN_BEST_INTENTIONS, column )}
                title={`${column === COLUMN_BEST_INTENTIONS ? '' : 'Move this goal to “best intentions”.'}`}
                onClick={() => {
                    if ( column === COLUMN_BEST_INTENTIONS ) { return; }
                    moveCardToBestIntentions( id, userId, column, description, context );
                }}
            >bi</a>

            <span className="card-controls__transition-icon"><img src="/images/icons/right.png" /></span>

            <a className={cardLinkClassName( passive, COLUMN_TO_DO, column )}
                title={`${column === COLUMN_TO_DO ? '' : 'Move this goal to “to do”.'}`}
                onClick={() => {
                    if ( column === COLUMN_TO_DO ) { return; }
                    moveCardToToDo( id, userId, column, description, context );
                }}
            >td</a>

            <span className="card-controls__transition-icon"><img src="/images/icons/right.png" /></span>

            <a className={cardLinkClassName( passive, COLUMN_IN_PROGRESS, column )}
                title={`${column === COLUMN_IN_PROGRESS ? '' : 'Move this goal to “in progress”.'}`}
                onClick={() => {
                    if ( column === COLUMN_IN_PROGRESS ) { return; }
                    moveCardToInProgress( id, userId, column, description, context );
                }}
            >ip</a>

            <span className="card-controls__transition-icon"><img src="/images/icons/right.png" /></span>

            <a className={cardLinkClassName( passive, COLUMN_DONE, column )}
                title={`${column === COLUMN_DONE ? '' : 'I’m “done” with this goal!'}`}
                onClick={() => {
                    if ( column === COLUMN_DONE ) { return; }
                    moveCardToDone( id, userId, column, description, context );
                }}
            >✓</a>
        </div>
    </div>
);

Card.propTypes = {
    column: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    copyCard: PropTypes.func.isRequired,
    editCard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    modalId: PropTypes.string.isRequired,
    passive: PropTypes.bool.isRequired,
    moveCardToBestIntentions: PropTypes.func.isRequired,
    moveCardToDone: PropTypes.func.isRequired,
    moveCardToInProgress: PropTypes.func.isRequired,
    moveCardToToDo: PropTypes.func.isRequired,
    snoozeCard: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
};

export default Card;
