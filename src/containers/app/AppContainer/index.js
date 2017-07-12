/*   __
 *  |::|    Jedi Focus
 *  |::|
 * _|//|_  Do. Or do not.
 * |____|  There is no try.
 *  || |
 *  | ||   This project is a part of the “Byte-Sized JavaScript” videocasts.
 *  | ||   You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *  || |
 *  || |   MIT Licensed — See LICENSE.md
 *  || |
 *  | ||   Send your comments, suggestions, and feedback to me@volkan.io
 *  ||||
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import App from '../../../components/app/App';

import { connect } from 'kink';
import * as actions from './actions';
import store from './store';

class AppContainer extends Component {
    componentDidMount() {
        this.props.fetchAppState(
            this.props.config,
            this.props.email,
            this.props.password,
            this.props.userId,
            this.props.context
        );
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
