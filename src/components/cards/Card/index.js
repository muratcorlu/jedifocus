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

showdown.setFlavor( 'github' );

const converter = new showdown.Converter( {
} );

const markdown = ( text ) => converter.makeHtml( text );

const Card = ( { item, bucket, id, editCard } ) => (
    <div className="card">
        <div className="card__text" dangerouslySetInnerHTML={{ __html: markdown( item ) }} />
        <a href="#" className="card__edit-action"
            onClick={
                ( evt ) => {
                    evt.preventDefault();
                    editCard( bucket, id );
                }
            }
        >edit</a>
    </div> );

Card.propTypes = {
    bucket: PropTypes.string.isRequired,
    editCard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired
};

export default Card;
