import React from 'react';
import PropTypes from 'prop-types';

import BestIntentionsContainer from '../../../containers/columns/BestIntentionsContainer';
import ToDoContainer from '../../../containers/columns/ToDoContainer';
import InProgressContainer from '../../../containers/columns/InProgressContainer';
import DoneContainer from '../../../containers/columns/DoneContainer';
import ModalEdit from '../../../components/modals/ModalEdit';

const App = ( { appStateFetched } ) => (
    <div className="container">
        {appStateFetched ? null : 'loading…' }
        <ModalEdit />
        <BestIntentionsContainer />
        <ToDoContainer />
        <InProgressContainer />
        <DoneContainer />
    </div>
);

App.propTypes = {
    appStateFetched: PropTypes.bool.isRequired
};

export default App;
