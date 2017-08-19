/*  __.-._
 *  '-._"7'  Jedi Focus
 *   /'.-c
 *   |  /T   Do. Or do not.
 *  _)_/LI   There is no try.
 *
 *  This project is a part of the “Byte-Sized JavaScript” videocasts.
 *  You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 *  MIT Licensed — See LICENSE.md
 *
 *  Send your comments, suggestions, and feedback to me@volkan.io
 */

import React from 'react';
import PropTypes from 'prop-types';

import BestIntentionsContainer from '../../../containers/columns/BestIntentionsContainer';
import ToDoContainer from '../../../containers/columns/ToDoContainer';
import InProgressContainer from '../../../containers/columns/InProgressContainer';
import DoneContainer from '../../../containers/columns/DoneContainer';
import ModalEditContainer from '../../../containers/modals/ModalEditContainer';
import ModalChangeContextContainer from '../../../containers/modals/ModalChangeContextContainer';
import LoadingIndicator from '../../../components/feedback/LoadingIndicator';
import NavigationContainer from '../../../containers/navigation/NavigationContainer';

const App = ( { appStateFetched } ) => (
    <div className="container">
        <LoadingIndicator show={!appStateFetched} />
        <ModalEditContainer />
        <ModalChangeContextContainer />
        <BestIntentionsContainer />
        <ToDoContainer />
        <InProgressContainer />
        <DoneContainer />
        <NavigationContainer />
    </div>
);

App.propTypes = {
    appStateFetched: PropTypes.bool.isRequired
};

export default App;
