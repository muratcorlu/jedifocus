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

import BaseColumn from '../../../components/columns/BaseColumn';
import ActionButton from '../../../components/buttons/ActionButton';

const BestIntentions = ( { items, addNew } ) => (
    <BaseColumn
        bucket="bestIntentions"
        heading="Best Intentions"
        className="column__best-intentions"
        items={items}
    >
        <center>
            <ActionButton text="New Goal"
                onClick={() => addNew()}
                className="column__action-button"
            />
            <ActionButton text="New Context"
                onClick={() => addNew()}
                className="column__action-button"
            />
            <ActionButton text="Manage Contexts"
                onClick={() => addNew()}
                className="column__action-button"
            />
            <ActionButton text="Switch Context"
                onClick={() => addNew()}
                className="column__action-button"
            />
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </center>
    </BaseColumn>
);

BestIntentions.propTypes = {
    items: PropTypes.object.isRequired,
    addNew: PropTypes.func.isRequired
};

export default BestIntentions;
