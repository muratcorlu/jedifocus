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

import { getTimestampFromGuid as ts } from 'tangled';

import CardContainer from '../../../containers/card/CardContainer';

const BaseColumn = ( { modalId, heading, items, className, headingClassName, column, children } ) => (
    <div className={`column ${className}`}>
        <h2 className={headingClassName}>{heading}</h2>

        <div className="column__body">
            { Object.keys( items )
                .sort( ( key, otherKey ) => {
                    if ( key === modalId ) { return -1; }
                    if ( otherKey === modalId ) { return 1; }

                    const keyTimestamp = ts( key );
                    const otherKeyTimestamp = ts( otherKey );

                    if ( isNaN( keyTimestamp ) ) { return 1; }
                    if ( isNaN( otherKeyTimestamp ) ) { return -1; }

                    if ( keyTimestamp > otherKeyTimestamp ) { return -1; }

                    return 1;
                } )
                .map( ( key ) => {
                    const item = items[key];

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
    children: PropTypes.node,
    className: PropTypes.string,
    column: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    headingClassName: PropTypes.string,
    items: PropTypes.object.isRequired,
    modalId: PropTypes.string.isRequired
};

export default BaseColumn;
