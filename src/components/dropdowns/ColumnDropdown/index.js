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

import React from 'react';
import PropTypes from 'prop-types';

const ColumnnDropdown = ( { id, value, onChange } ) => (
    <select id={id} className="modal-edit__selection"
        value={value}
        onChange={( evt ) => onChange( evt.target.value )}
    >
        <option value="bestIntentions">Best Intentions</option>
        <option value="toDo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
    </select>
);

ColumnnDropdown.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ColumnnDropdown;