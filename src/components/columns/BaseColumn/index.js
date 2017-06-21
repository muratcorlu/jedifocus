import React from 'react';
import PropTypes from 'prop-types';

const BaseColumn = ( { heading, children, className } ) => (
    <div className={`column ${className}`}>
        <h2>{heading}</h2>
        <div className="column__body">
            {children}
        </div>
    </div>
);

BaseColumn.propTypes = {
    heading: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
};

export default BaseColumn;
