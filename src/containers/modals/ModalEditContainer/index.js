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

import React from 'react';
import PropTypes from 'prop-types';

import * as actions from './actions';
import { connect } from 'kink';

import ModalEdit from '../../../components/modals/ModalEdit';

const ModalEditContainer = ( {
    context, bucket, id, item, userId, stateContext, show,
    updateBucket, updateContext, updateDescription, saveGoal
} ) => (
    <ModalEdit
        context={context} bucket={bucket} id={id} item={item} show={show}
        saveGoal={() => saveGoal( userId, context, bucket, id, item, stateContext )}
        updateBucket={updateBucket}
        updateContext={updateContext}
        updateDescription={updateDescription}
    />
);

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
