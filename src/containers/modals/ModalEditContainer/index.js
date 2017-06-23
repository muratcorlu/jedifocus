import React from 'react';
import PropTypes from 'prop-types';

import * as actions from './actions';
import { connect } from 'kink';

import ModalEdit from '../../../components/modals/ModalEdit';

const ModalEditContainer = ( {
    show, bucket, item, id,
    updateDescription, updateBucket, saveGoal,
    bestIntentions, inProgress, toDo
} ) => ( <ModalEdit
    bestIntentions={bestIntentions}
    bucket={bucket}
    id={id}
    inProgress={inProgress}
    item={item}
    saveGoal={saveGoal}
    show={show}
    toDo={toDo}
    updateBucket={updateBucket}
    updateDescription={updateDescription}
/> );

ModalEditContainer.propTypes = {
    bestIntentions: PropTypes.object.isRequired,
    bucket: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    inProgress: PropTypes.object.isRequired,
    item: PropTypes.string.isRequired,
    saveGoal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    toDo: PropTypes.object.isRequired,
    updateBucket: PropTypes.func.isRequired,
    updateDescription: PropTypes.func.isRequired
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
        toDo: state.toDo ? state.toDo.toJSON() : {}
    } )
);
