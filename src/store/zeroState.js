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

import { fromJS as makeImmutable } from 'immutable';

const zeroState = {

    // #region App and Context

    // Loading Indicator
    appStateFetched: false,

    // Current Context
    context: 'default',

    // #endregion

    // #region Column Cards

    bestIntentions: makeImmutable( {} ),
    done: makeImmutable( {} ),
    inProgress: makeImmutable( {} ),
    toDo: makeImmutable( {} ),

    // #endregion

    // #region “Edit Goal” Modal

    modalVisible: false,
    modalBucket: '',
    modalId: '',
    modalItem: '',
    modalContext: 'default',

    // #endregion

    // #region “Change Context” Modal

    modalContextVisible: false

    // #endregion
};

export default zeroState;
