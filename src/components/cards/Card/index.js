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

showdown.setFlavor( 'github' );

const converter = new showdown.Converter( {
    openLinksInNewWindow: true
} );

const markdown = ( text ) => converter.makeHtml( text );

const Card = ( { item, bucket, id, editCard } ) => (
    <div className="card"
        onClick={
            ( evt ) => {
                if (
                    parent(
                        evt.target,
                        ( elm ) => elm.nodeName.toLowerCase() === 'a'
                    )
                ) { return; }

                evt.preventDefault();
                editCard( bucket, id );
            }
        }
    >
        <div className="card__text" dangerouslySetInnerHTML={{ __html: markdown( item ) }} />
    </div> );

Card.propTypes = {
    bucket: PropTypes.string.isRequired,
    editCard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired
};

export default Card;
