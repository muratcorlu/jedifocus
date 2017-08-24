/*  __.-._
 *  '-._"7'  JediFocus
 *   /'.-c
 *   |  /T   Do. Or do not.
 *  _)_/LI   There is no try.
 *
 *  This project is a part of the “Byte-Sized JavaScript” videocasts.
 *  You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 *  MIT Licensed — See LICENSE.md
 *
 *  Send your comments, suggestions, and feedback to me@volkan.io
 */

import { fromJS as makeImmutable } from 'immutable';

const zeroState = {

    // #region App and Context

    // Loading Indicator
    appStateFetched: false,

    // Current Context
    context: 'demo',

    // #endregion

    // #region Column Cards

    bestIntentions: makeImmutable( {} ),
    done: makeImmutable( {} ),
    inProgress: makeImmutable( {} ),
    toDo: makeImmutable( {} ),

    // #endregion

    // #region “Edit Goal” Modal

    modalVisible: false,
    modalColumn: '',
    modalId: '',
    modalItem: '',
    modalContext: '',

    // #endregion

    // #region “Change Context” Modal

    modalContextVisible: false

    // #endregion
};

export default zeroState;
