/*
 * ▬▬ι═══════ﺤJediFocus-═══════ι▬▬
 *   use the source to get things done
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bit.ly/bytesized
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io                                                     l
 */

import React from 'react';
import PropTypes from 'prop-types';

import CardContainer from '../../../containers/cards/CardContainer';

const BaseColumn = ( { heading, items, className, bucket, children } ) => (
    <div className={`column ${className}`}>
        <h2>{heading}</h2>

        <div className="column__body">
            { Object.keys( items ).map( ( key ) => {
                const item = items[ key ];

                return ( <CardContainer key={key} item={item} id={key} bucket={bucket} /> );
            } ) }
        </div>

        <div>{children}</div>
    </div>
);

BaseColumn.propTypes = {
    bucket: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    heading: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired
};

export default BaseColumn;
