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
            this.props.password
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
    appStateFetched: PropTypes.bool.isRequired
};

const ConnectedAppContainer = connect(
    AppContainer, actions,
    ( { appStateFetched } ) => ( { appStateFetched } )
);

const ProvidedAppContainer = ( { config, email, password } ) => (
    <Provider store={store()}>
        <ConnectedAppContainer config={config} email={email} password={password} />
    </Provider>
);

ProvidedAppContainer.propTypes = {
    config: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};

export default ProvidedAppContainer;
