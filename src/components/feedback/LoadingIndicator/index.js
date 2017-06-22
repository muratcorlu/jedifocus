import React from 'react';
import PropTypes from 'prop-types';

const LoadingIndicator = ( { show } ) => ( show ?
    <div className="container__loading">Fetching tasks…</div> :
    null
);

LoadingIndicator.defaultProps = {
    show: false
};

LoadingIndicator.propTypes = {
    show: PropTypes.bool
};

export default LoadingIndicator;
