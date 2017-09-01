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
const ContextDropdown = ( { id, value, onChange, className } ) => (
    <select id={id}
        className={`modal-edit__selection ${className || ''}`}
        value={value}
        onChange={( evt ) => onChange( evt.target.value ) }
    >
        <optgroup label="Focus">
            <option value="runway">Runway</option>
            <option value="low-hanging-fruits">Low-Hanging Fruits</option>
            <option value="errands">Errands</option>
            <option value="backlog">Backlog</option>
        </optgroup>

        <optgroup label="Later">
            <option value="revisit">Clarify / Revisit</option>
            <option value="later">Later / Maybe</option>
            <option value="ice-box">Ice Box</option>
        </optgroup>

        {
            ( value === 'demo' ) ?
                <optgroup label="Help">
                    <option value="demo">Tutorial</option>
                </optgroup>
                :
                null
        }
    </select>
);

import PropTypes from 'prop-types';

ContextDropdown.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default ContextDropdown;
