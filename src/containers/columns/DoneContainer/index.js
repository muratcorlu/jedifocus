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

import Done from '../../../components/columns/Done';

import { connect } from 'kink';

export default connect(
    Done,
    {},
    ( { done } ) => ( { items: ( done ? done.toJSON() : {} ) } )
);
