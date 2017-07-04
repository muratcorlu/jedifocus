/*
 * ▬▬ι═══════ﺤJediFocus-═══════ι▬▬
 *   use the source to get things done
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bit.ly/bytesized
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io                                                     l
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'kink';
import * as actions from './actions';

import Card from '../../../components/cards/Card';

const CardContainer = ( { item, id, bucket, editCard } ) => (
    <Card item={item} id={id} bucket={bucket} editCard={editCard} />
);

CardContainer.propTypes = {
    bucket: PropTypes.string.isRequired,
    editCard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired
};

export default connect( CardContainer, actions, () => ( {} ) );
