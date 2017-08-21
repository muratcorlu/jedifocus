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
    <div style={{ textAlign: 'left' }}>
        <ul style={{ display: 'none' }}>
            <li>
                <label>Areas of Focus</label>
                <ul>
                    <li><a href="#" onClick={() => onChange( 'runway' )}>Runway</a></li>
                    <li><a href="#" onClick={() => onChange( 'low-hanging-fruits' )}>Low-Hanging Fruits</a></li>
                    <li><a href="#" onClick={() => onChange( 'errands' )}>Errands</a></li>
                    <li><a href="#" onClick={() => onChange( 'backlog' )}>Backlog</a></li>
                </ul>
            </li>
            <li>
                <label>Clarify or Kick to the Future</label>
                <ul>
                    <li><a href="#" onClick={() => onChange( 'revisit' )}>
                        Needs Clarification / Splitting / Revisit</a></li>
                    <li><a href="#" onClick={() => onChange( 'later' )}>Later / Maybe</a></li>
                    <li><a href="#" onClick={() => onChange( 'ice-box' )}>Ice Box</a></li>
                </ul>
            </li>
        </ul>
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
                <option value="revisit">Needs Clarification / Splitting / Revisit</option>
                <option value="later">Later / Maybe</option>
                <option value="ice-box">Ice Box</option>
            </optgroup>
        </select>
    </div>
);

import PropTypes from 'prop-types';

ContextDropdown.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default ContextDropdown;
