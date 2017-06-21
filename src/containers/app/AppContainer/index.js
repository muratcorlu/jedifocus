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
        return ( <App /> );
    }
}

AppContainer.propTypes = {
    config: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    fetchAppState: PropTypes.func.isRequired
};

const ConnectedAppContainer = connect(
    AppContainer, actions,
    () => ( {} )
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
