import React from 'react';
import PropTypes from 'prop-types';

const Card = ( { item, bucket, id, editCard } ) => (
    <div className="card">
        <span className="card__text">{item}</span>
        <a href="#" className="card__edit-action" onClick={()=> editCard( bucket, id )}>edit</a>
    </div> );

Card.propTypes = {
    bucket: PropTypes.string.isRequired,
    editCard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired
};

export default Card;
