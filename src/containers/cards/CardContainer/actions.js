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

import { JFDI_EDIT_CARD } from '../../../lib/constants';

const editCard = ( bucket, id ) => ( {
    type: JFDI_EDIT_CARD,
    payload: {
        bucket,
        id
    }
} );

export { editCard };
