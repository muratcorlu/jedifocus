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

import { fromJS as makeImmutable } from 'immutable';

const zeroState = {
    bestIntentions: makeImmutable( {} ),
    toDo: makeImmutable( {} ),
    inProgress: makeImmutable( {} ),
    done: makeImmutable( {} ),
    appStateFetched: false,
    modalVisible: false,
    modalId: '',
    modalItem: '',
    modalBucket: ''
};

export default zeroState;
