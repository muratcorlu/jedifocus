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

import CardContainer from '../../../containers/cards/CardContainer';

const BaseColumn = ( { heading, items, className, headingClassName, column, children } ) => (
    <div className={`column ${className}`}>
        <h2 className={headingClassName}>{heading}</h2>

        <div className="column__body">
            { Object.keys( items ).map( ( key ) => {
                const item = items[ key ];

                return ( <CardContainer key={key} item={item} id={key} column={column} /> );
            } ) }
        </div>

        <div>{children}</div>
    </div>
);

BaseColumn.defaultProps = {
    className: '',
    headingClassName: ''
};

BaseColumn.propTypes = {
    column: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    heading: PropTypes.string.isRequired,
    headingClassName: PropTypes.string,
    items: PropTypes.object.isRequired
};

export default BaseColumn;
