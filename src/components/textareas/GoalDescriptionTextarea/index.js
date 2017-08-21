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

import React from 'react';
import PropTypes from 'prop-types';

const GoalDescriptionTextarea = ( { id, value, onChange } ) => (
    <textarea id={id}
        className="modal-edit__description"
        value={value}
        onChange={( evt ) => onChange( evt.target.value )}
        placeholder="What would you like to do?"
        autoFocus={!value}
    />
);

GoalDescriptionTextarea.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default GoalDescriptionTextarea;
