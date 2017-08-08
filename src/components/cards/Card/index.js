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
        <div style={{ 'border-top': '2px #dddddd solid', 'padding-top': '5px', 'text-align': 'right', 'margin-bottom': '-15px', 'margin-left': '-16px', 'margin-right': '-16px', 'padding-left': '10px', 'padding-right': '10px', 'padding-bottom': '5px', 'background': '#e0e0e0', 'position': 'relative', 'top': '2px' }}>
            <a href="#" style={{ 'xfont-size': '22px', 'font-weight': 'normal', 'float': 'left', 'text-decoration': 'none', 'color': '#aaaaaa' }}>✲</a>  &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" style={{ 'text-decoration': 'none', 'color': '#aaaaaa' }}>🡸</a> &nbsp;
            <a href="#" style={{ 'text-decoration': 'none', 'color': '#aaaaaa' }}>🡺</a>
        </div>
    </div> );

Card.propTypes = {
    bucket: PropTypes.string.isRequired,
    editCard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired
};

export default Card;
