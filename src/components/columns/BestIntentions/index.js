import React from 'react';
import PropTypes from 'prop-types';

import BaseColumn from '../BaseColumn';

const BestIntentions = ( { items } ) => (
    <BaseColumn heading="Best Intentions" className="column__best-intentions" items={items} />
);

BestIntentions.propTypes = {
    items: PropTypes.object.isRequired
};

export default BestIntentions;
