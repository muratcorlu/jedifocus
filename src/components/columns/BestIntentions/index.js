import React from 'react';
import PropTypes from 'prop-types';

import BaseColumn from '../BaseColumn';

const BestIntentions = ( { items } ) => {
    console.log( items );

    return (
        <BaseColumn heading="Best Intentions" className="column__best-intentions">
            { Object.keys( items ).map( ( key ) => {
                const item = items[ key ];

                return ( <div className="card" key={key}>{item}</div> );
            } ) }
        </BaseColumn>
    );
};

BestIntentions.propTypes = {
    items: PropTypes.object.isRequired
};

export default BestIntentions;
