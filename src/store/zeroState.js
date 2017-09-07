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

    appRandomQuote: '',

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
    modalRevealed: false,
    modalColumn: '',
    modalId: '',
    modalDescription: '',
    modalContext: '',

    // #endregion

    // #region “Change Context” Modal

    modalContextVisible: false,

    // #endregion

    // #region Motivational Quotes

    quotes: makeImmutable( [
        'A goal is a dream with a deadline.',
        'A will finds a way.',
        'Believe that you can.',
        'Deserve your dream.',
        'Do something wonderful, people will imitate you.',
        'Do whatever you do intensely.',
        'Do. Or do not. There’s no try.',
        'Done is better than perfect.',
        'Don’t fight the problem, decide it.',
        'Don’t think, just do.',
        'Either you run the day, or the day runs you.',
        'Expect problems and eat them for breakfast.',
        'Frustration is a prerequisite of satisfaction.',
        'Get started to get ahead.',
        'Go big or go home.',
        'Good, better, best. Never let it rest.',
        'Gopher it!',
        'If you are going through hell, keep going.',
        'If you can dream it, you can do it.',
        'It always seems impossible until it’s done.',
        'J. F. D. I.',
        'Leap, and the net will appear.',
        'Make it happen.',
        'Never complain, never explain.',
        'Never, never, never give up.',
        'One finds limits by pushing them.',
        'Quality is not an act, it is a habit.',
        'Quit talking and begin doing.',
        'Set up your goals high, and do not stop till you get there.',
        'Setting goals will turn invisible into the visible.',
        'Stay hungry, stay foolish.',
        'Step by step and the thing is done.',
        'The more you do, the more you can do.',
        'There is always room at the top.',
        'To begin, begin.',
        'To know yourself, assert yourself.',
        'Well done is better than well said.',
        'What you can do today can improve all your tomorrows.',
        'What you do makes a difference.',
        'When one must, one can.',
        'Wherever you are — be all there.',
        'Who seeks shall find.',
        'Winners never quit; quitters never win.',
        'You came to live out loud.',
        'You can, therefore you are.',
        'You come to win.',
        'You have to make it happen.',
        'You were born to do this.',
        'You will never win if you never begin.'
    ] )

    // #endregion
};

export default zeroState;
