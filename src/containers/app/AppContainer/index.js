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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { on, off } from 'dombili';

import App from '../../../components/app/App';

import { connect } from 'kink';
import * as actions from './actions';
import store from '../../../store';

import { onMouseDown, onMouseMove, onMouseUp, initializeState } from './events';

const body = document.body;

class AppContainer extends Component {
    constructor( props ) {
        super( props );

        initializeState( this );

        this.onMouseDown = this.onMouseDown.bind( this );
        this.onMouseMove = this.onMouseMove.bind( this );
        this.onMouseUp = this.onMouseUp.bind( this );
    }

    onMouseDown( evt ) { onMouseDown( evt, this ); }
    onMouseMove( evt ) { onMouseMove( evt, this ); }
    onMouseUp( evt ) { onMouseUp( evt, this ); }

    fetchAppState() {
        this.props.fetchAppState(
            this.props.config,
            this.props.email,
            this.props.password,
            this.props.userId,
            this.props.context
        );
    }

    componentDidMount() {
        this.fetchAppState();

        on( body, 'mousedown', this.onMouseDown );
        on( body, 'mousemove', this.onMouseMove );
        on( body, 'mouseup', this.onMouseUp );
    }

    componentBeforeUnmount() {
        off( body, 'mousedown', this.onMouseDown );
        off( body, 'mousemove', this.onMouseMove );
        off( body, 'mouseup', this.onMouseUp );
    }

    componentDidUpdate( prevProps ) {
        if ( this.props.context === prevProps.context ) { return; }

        this.fetchAppState();
    }

    render() {
        return ( <App appStateFetched={this.props.appStateFetched} /> );
    }
}

AppContainer.propTypes = {
    config: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    fetchAppState: PropTypes.func.isRequired,
    appStateFetched: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired
};

const ConnectedAppContainer = connect(
    AppContainer, actions,
    ( { appStateFetched, userId, context } ) => ( { appStateFetched, userId, context } )
);

const ProvidedAppContainer = ( { config, email, password, userId } ) => (
    <Provider store={store( { userId } ) }>
        <ConnectedAppContainer
            config={config} email={email} password={password} userId={userId}
        />
    </Provider>
);

ProvidedAppContainer.propTypes = {
    config: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
};

export default ProvidedAppContainer;
