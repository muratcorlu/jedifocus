import React from 'react';
import PropTypes from 'prop-types';

import CardContainer from '../../../containers/cards/CardContainer';

const BaseColumn = ( { heading, items, className, bucket } ) => (
    <div className={`column ${className}`}>
        <h2>{heading}</h2>
        <div className="column__body">
            { Object.keys( items ).map( ( key ) => {
                const item = items[ key ];

                return ( <CardContainer key={key} item={item} id={key} bucket={bucket} /> );
            } ) }
        </div>
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
