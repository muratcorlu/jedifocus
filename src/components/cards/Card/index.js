import React from 'react';
import PropTypes from 'prop-types';

const Card = ( { item } ) => (
    <div className="card">
        <span className="card__text">{item}</span>
        <a href="#" className="card__edit-action">edit</a>
    </div> );

Card.propTypes = {
    item: PropTypes.string.isRequired
};

export default Card;
