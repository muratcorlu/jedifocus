import React from 'react';
import PropTypes from 'prop-types';

import BaseColumn from '../BaseColumn';

const Done = ( { items } ) => (
    <BaseColumn
        bucket="done"
        heading="Done"
        className="column__done"
        items={items}
    />
);

Done.propTypes = {
    items: PropTypes.object.isRequired
};

export default Done;
