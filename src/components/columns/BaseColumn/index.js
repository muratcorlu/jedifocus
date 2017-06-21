import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../../components/cards/Card';

const BaseColumn = ( { heading, items, className } ) => (
    <div className={`column ${className}`}>
        <h2>{heading}</h2>
        <div className="column__body">
            { Object.keys( items ).map( ( key ) => {
                const item = items[ key ];

                return ( <Card key={key} item={item} /> );
            } ) }
        </div>
    </div>
);

BaseColumn.propTypes = {
    heading: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    items: PropTypes.object.isRequired
};

export default BaseColumn;
