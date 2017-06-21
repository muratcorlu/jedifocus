import React from 'react';
import PropTypes from 'prop-types'

import BaseColumn from '../BaseColumn';

const InProgress = ( { items } ) => (
    <BaseColumn heading="In Progress" className="column__in-progress" items={ items } />
);

InProgress.propTypes = {
    items: PropTypes.object.isRequired
}

export default InProgress;
