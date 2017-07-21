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
                context={this.props.context}
                bucket={this.props.bucket}
                id={this.props.id}
                item={this.props.item}
                saveGoal={() => this.props.saveGoal(
                    this.props.userId,
                    this.props.context,
                    this.props.bucket,
                    this.props.id,
                    this.props.item,
                    this.props.stateContext
                )}
                show={this.props.show}
                updateBucket={this.props.updateBucket}
                updateContext={this.props.updateContext}
                updateDescription={this.props.updateDescription}
            />
        );
    }
}

ModalEditContainer.propTypes = {
    bucket: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    stateContext: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    saveGoal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    updateBucket: PropTypes.func.isRequired,
    updateDescription: PropTypes.func.isRequired,
    updateContext: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
};

export default connect(
    ModalEditContainer,
    actions,
    ( state ) => ( {
        bestIntentions: state.bestIntentions ? state.bestIntentions.toJSON() : {},
        bucket: state.modalBucket,
        id: state.modalId,
        inProgress: state.inProgress ? state.inProgress.toJSON() : {},
        item: state.modalItem,
        show: state.modalVisible,
        context: state.modalContext,
        stateContext: state.context,
        toDo: state.toDo ? state.toDo.toJSON() : {},
        userId: state.userId
    } )
);
