/*  __.-._
 *  '-._"7'  JediFocus
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

import BestIntentionsContainer from '../../../containers/column/BestIntentionsColumnContainer';
import ToDoContainer from '../../../containers/column/ToDoColumnContainer';
import InProgressContainer from '../../../containers/column/InProgressColumnContainer';
import DoneContainer from '../../../containers/column/DoneColumnContainer';
import CardEditModalContainer from '../../../containers/card/CardEditModalContainer';
import ContextChangeModalContainer from '../../../containers/context/ContextChangeModalContainer';
import LoadingIndicator from '../../../components/feedback/LoadingIndicator';
import NavigationContainer from '../../../containers/navigation/NavigationContainer';

const App = ( { appStateFetched, appRandomQuote } ) => (
    <div className={`container ${appStateFetched ? 'container--fetched' : 'no-pointer'}`}>
        <LoadingIndicator show={!appStateFetched} text={appRandomQuote} />
        <CardEditModalContainer />
        <ContextChangeModalContainer />
        <BestIntentionsContainer />
        <ToDoContainer />
        <InProgressContainer />
        <DoneContainer />
        <NavigationContainer />
        <div className="topHeaderBackground"></div>
    </div>
);

App.propTypes = {
    appStateFetched: PropTypes.bool.isRequired,
    appRandomQuote: PropTypes.string.isRequired
};

export default App;
