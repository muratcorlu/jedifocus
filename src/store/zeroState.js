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

    // #region Authentication

    loggedIn: true, // false, // false, // false, // true, // false, // true, // false, //false, // false, // false, // true, // false, // true, // false,

    // #endregion

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
        'Action is the foundational key to all success',
        'All our dreams can come true if we have the courage to pursue them.',
        'All progress takes place outside the comfort zone.',
        'Arriving at one goal is the starting point to another.',
        'Believe that you can.',
        'Be like water.',
        'Breathe out what you can’t control. — Focus.',
        'Clarity affords focus.',
        'Deserve your dream.',
        'Do one thing every day that scares you.',
        'Do something wonderful, people will imitate you.',
        'Do whatever you do intensely.',
        'Do. Or do not. There’s no try.',
        'Done is better than perfect.',
        'Don’t fight the problem, decide it.',
        'Don’t stop when you’re tired; stop when you’re done.',
        'Don’t think, just do.',
        'Either you run the day, or the day runs you.',
        'Expect problems and eat them for breakfast.',
        'Focus.',
        'Focus is your greatest asset',
        'Focus on one thing, and one thing only.',
        'Focus on your goals; ignore the rest.',
        'Fortune sides with him who dares.',
        'Frustration is a prerequisite of satisfaction.',
        'Get started to get ahead.',
        'Go big or go home.',
        'Good, better, best. Never let it rest.',
        'Gopher it!',
        'Great things come to those who don’t wait.',
        'Harder. Better. Faster. Stronger.',
        'Hope.',
        'I am speed!',
        'I find that the harder I work, the more luck I seem to have.',
        'If you are going through hell, keep going.',
        'If you can dream it, you can do it.',
        'It always seems impossible until it’s done.',
        'It does not matter how slowly you go, so long as you do not stop.',
        'It’s not what you look at that matters, it’s what you see.',
        'J. F. D. I.',
        'Know yourself.',
        'Leap, and the net will appear.',
        'Life begins at the end of your comfort zone.',
        'Love what you do; do what you love.',
        'Make it happen.',
        'Make the “now” the primary focus of your life.',
        'May the force be with you.',
        'May the source be with you.',
        'Have a mind like water.',
        'Make a plan; stick to the plan; always deliver.',
        'Manage your distractions; don’t let them manage you.',
        'Motivation is what gets you started. Habit is what keeps you going.',
        'Never complain, never explain.',
        'Never, never, never give up.',
        'Never tell me the odds.',
        'No masterpiece was ever created by a lazy artist.',
        'Nothing is impossible, the word itself says “I’m possible”!',
        'One finds limits by pushing them.',
        'Opportunities don’t happen, you create them.',
        'People rarely succeed unless they have fun in what they are doing.',
        'Perfection is boring… JFDI!',
        'Production is the best test environment.',
        'Quality is not an act, it is a habit.',
        'Quit talking and begin doing.',
        'Set up your goals high, and do not stop till you get there.',
        'Setting goals will turn invisible into the visible.',
        'Stay hungry, stay foolish.',
        'Step by step and the thing is done.',
        'Success is liking yourself, liking what you do, and liking how you do it.',
        'Success is the sum of small efforts, repeated.',
        'The best way to predict the future is to create it.',
        'The Force will be with you. Always.',
        'The more you do, the more you can do.',
        'The secret of getting ahead is getting started.',
        'The starting point of all achievement is desire.',
        'The successful warrior is the average man, with laser-like focus.',
        'There is always room at the top.',
        'To begin, begin.',
        'To do it, do it.',
        'To know yourself, assert yourself.',
        'To live a creative life, we must lose our fear of being wrong.',
        'Use the force, Luke.',
        'Use the source, Luke.',
        'Well done is better than well said.',
        'What you can do today can improve all your tomorrows.',
        'What you do makes a difference.',
        'When one must, one can.',
        'Wherever you are — be all there.',
        'Who seeks shall find.',
        'Winners never quit; quitters never win.',
        'You came to live out loud.',
        'You can do anything, but not everything.',
        'You can, therefore you are.',
        'You come to win.',
        'You don’t have to be great to start, but you have to start to be great.',
        'You have to make it happen.',
        'You must expect great things of yourself before you can do them.',
        'You were born to do this.',
        'You will never win if you never begin.',
        'You will succeed because most people are lazy.',
        'Your focus determines your reality.'
    ] )

    // #endregion
};

export default zeroState;
