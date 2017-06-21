import React, { Component } from 'react';
import PropTypes from 'prop-types';

import App from '../../../components/app/App';

import * as db from '../../../lib/io/firebase';

class AppContainer extends Component {
    componentDidMount() {
        db.initialize( this.props.config );
        db.login( this.props.email, this.props.password )
            .then( () => Promise.all( [
                db.bestIntentions(),
                db.toDo(),
                db.inProgress()
            ] ) )
            .then( ( data ) => console.log( data ) );
    }

    render() {
        return ( <App /> );
    }
}

AppContainer.propTypes = {
    config: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};

export default AppContainer;
