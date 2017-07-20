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

import { saveAll, saveGoal, removeGoalFromOtherBuckets } from '../../../lib/io/firebase';

const sendSaveAllRequest = saveAll;
const sendSaveGoalRequest = saveGoal;
const sendRemoveFromOtherBucketsRequest = removeGoalFromOtherBuckets;

export {
    sendSaveAllRequest,
    sendSaveGoalRequest,
    sendRemoveFromOtherBucketsRequest
};
