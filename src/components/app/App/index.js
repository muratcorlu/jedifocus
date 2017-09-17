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

import LoginModal from '../../../components/login/LoginModal';

const App = ( { loggedIn, appStateFetched, appRandomQuote } ) => (
    loggedIn ?
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
        <div className="bottomUndoNotification">
            <span>Done and dusted!</span>
            <strong>UNDO</strong>
            <span>✕</span>
        </div>
    </div> :
    <div className="container">
        <LoginModal />
        <div className="topHeaderBackground" style={{textAlign:'center', fontSize: '24px', fontFamily: 'Georgia Pro Lt It', fontWeight: 'inherit',  fontStyle: 'italic'}}><span style={{position: 'relative', top: '11px'}}>{appRandomQuote}</span></div>
                <img 
            src="/images/stationary.png"
            style={{zIndex: '-2', position: 'fixed', top: '50px', left: '0', opacity: '1', xwidth: '50vw', xheight: '50vh'}}
        />
    </div>
);

App.propTypes = {
    appStateFetched: PropTypes.bool.isRequired,
    appRandomQuote: PropTypes.string.isRequired,
    loggedIn: PropTypes.bool.isRequired
};

export default App;
