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

const onCardClick = ( evt, bucket, id, editCard ) => {
    if (
        parent(
            evt.target,
            ( elm ) => elm.nodeName.toLowerCase() === 'a'
        )
    ) { return; }

    evt.preventDefault();

    editCard( bucket, id );
};

const markdown = ( text ) => converter.makeHtml( text );

const Card = ( {
    item, bucket, id, userId, context,
    editCard, copyCard, /* snoozeCard, */
    moveCardToBestIntentions, moveCardToToDo, moveCardToInProgress, moveCardToDone
} ) => (
    <div className="card" onClick={( evt ) => onCardClick( evt, bucket, id, editCard )}>
        <div className="card__text" dangerouslySetInnerHTML={{ __html: markdown( item ) }} />
        <div className="card-controls" onClick={( evt ) => evt.stopPropagation()}>
            <a href="#" className="card-controls__link card-controls__left-link"
                onClick={() => copyCard( bucket, id )}
                title="Copy this goal into a new goal."
            ><img src="/images/copy.png" alt="Copy Icon" title="Copy this goal into a new goal." /></a>

            {/* <a href="#" className="card-controls__link card-controls__left-link" */}
            {/* onClick={() => snoozeCard( bucket, id )} */}
            {/* title="Defer this goal until later." */}
            {/* ><img src="/images/clock.png" alt="Clock Icon" title="Defer this goal until later." /></a> */}

            <a className={`card-controls__link card-controls__stage-link${
                bucket === COLUMN_BEST_INTENTIONS ? '--selected' : ''}`}
            title={`${bucket === COLUMN_BEST_INTENTIONS ? '' : 'Move this goal to “best intentions”.'}`}
            onClick={() => {
                if ( bucket === COLUMN_BEST_INTENTIONS ) { return; }
                moveCardToBestIntentions( id, userId, bucket, item, context );
            }}
            >bi</a>

            <span className="card-controls__transition"><img src="/images/right.png" /></span>

            <a className={`card-controls__link card-controls__stage-link${
                bucket === COLUMN_TO_DO ? '--selected' : ''}`}
            title={`${bucket === COLUMN_TO_DO ? '' : 'Move this goal to “to do”.'}`}
            onClick={() => {
                if ( bucket === COLUMN_TO_DO ) { return; }
                moveCardToToDo( id, userId, bucket, item, context );
            }}
            >td</a>

            <span className="card-controls__transition"><img src="/images/right.png" /></span>

            <a className={`card-controls__link card-controls__stage-link${
                bucket === COLUMN_IN_PROGRESS ? '--selected' : ''}`}
            title={`${bucket === COLUMN_IN_PROGRESS ? '' : 'Move this goal to “in progress”.'}`}
            onClick={() => {
                if ( bucket === COLUMN_IN_PROGRESS ) { return; }
                moveCardToInProgress( id, userId, bucket, item, context );
            }}
            >ip</a>

            <span className="card-controls__transition"><img src="/images/right.png" /></span>

            <a className={`card-controls__link card-controls__stage-link${
                bucket === COLUMN_DONE ? '--selected' : ''}`}
            title={`${bucket === COLUMN_IN_PROGRESS ? '' : 'I’m “done” with this goal!'}`}
            onClick={() => {
                if ( bucket === COLUMN_DONE ) { return; }
                moveCardToDone( id, userId, bucket, item, context );
            }}
            >✓</a>
        </div>
    </div> );

Card.propTypes = {
    bucket: PropTypes.string.isRequired,
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
