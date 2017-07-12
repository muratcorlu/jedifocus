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

import * as actions from './actions';
import { connect } from 'kink';

import { on, off } from 'dombili';

import ModalEdit from '../../../components/modals/ModalEdit';

import { onMouseDown, onMouseMove, onMouseUp, initializeState } from './events';

const body = document.body;

class ModalEditContainer extends Component {
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

    componentDidMount() {
        on( body, 'mousedown', this.onMouseDown );
        on( body, 'mousemove', this.onMouseMove );
        on( body, 'mouseup', this.onMouseUp );
    }

    componentBeforeUnmount() {
        off( body, 'mousedown', this.onMouseDown );
        off( body, 'mousemove', this.onMouseMove );
        off( body, 'mouseup', this.onMouseUp );
    }

    render() {
        return (
            <ModalEdit
                bestIntentions={this.props.bestIntentions}
                bucket={this.props.bucket}
                id={this.props.id}
                inProgress={this.props.inProgress}
                item={this.props.item}
                saveGoal={( data ) => this.props.saveGoal(
                    this.props.userId, this.props.context, data
                )}
                show={this.props.show}
                toDo={this.props.toDo}
                updateBucket={this.props.updateBucket}
                updateDescription={this.props.updateDescription}
            />
        );
    }
}

ModalEditContainer.propTypes = {
    bestIntentions: PropTypes.object.isRequired,
    bucket: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    inProgress: PropTypes.object.isRequired,
    item: PropTypes.string.isRequired,
    saveGoal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    toDo: PropTypes.object.isRequired,
    updateBucket: PropTypes.func.isRequired,
    updateDescription: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
};

export default connect(
    ModalEditContainer,
    actions,
    ( state ) => ( {
        bestIntentions: state.bestIntentions ? state.bestIntentions.toJSON() : {},
        bucket: state.modalBucket,
        context: state.context,
        id: state.modalId,
        inProgress: state.inProgress ? state.inProgress.toJSON() : {},
        item: state.modalItem,
        show: state.modalVisible,
        toDo: state.toDo ? state.toDo.toJSON() : {},
        userId: state.userId
    } )
);
