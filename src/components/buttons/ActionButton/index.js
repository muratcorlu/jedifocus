import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ( { text, onClick, className } ) => (
    <a href="#" className={`action-button ${className}`}
        onClick={( evt ) => {
            evt.preventDefault();
            onClick( evt );
        }}>{text}</a>
);

ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default ActionButton;
