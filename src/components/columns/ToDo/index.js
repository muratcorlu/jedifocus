import React from 'react';
import PropTypes from 'prop-types';

import BaseColumn from '../BaseColumn';

const ToDo = ( { items } ) => (
    <BaseColumn
        bucket="toDo"
        heading="To Do"
        className="column__to-do"
        items={items}
    />
);

ToDo.propTypes = {
    items: PropTypes.object.isRequired
};

export default ToDo;
