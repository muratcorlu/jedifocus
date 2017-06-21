import { fromJS as makeImmutable } from 'immutable';

const zeroState = {
    bestIntentions: makeImmutable( {} ),
    toDo: makeImmutable( {} ),
    inProgress: makeImmutable( {} ),
    appStateFetched: false
};

export default zeroState;
