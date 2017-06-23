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
        <ActionButton text="Add a New Goal"
            onClick={() => addNew()}
            className="column__action-button"
        />
    </BaseColumn>
);

BestIntentions.propTypes = {
    items: PropTypes.object.isRequired,
    addNew: PropTypes.func.isRequired
};

export default BestIntentions;
