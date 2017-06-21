import { fromJS as makeImmutable } from 'immutable';

const zeroState = {
    bestIntentions: makeImmutable( {} ),
    toDo: makeImmutable( {} ),
    inProgress: makeImmutable( {} )
};

export default zeroState;
