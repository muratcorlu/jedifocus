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

const ContextDropdown = ( { id, value, onChange } ) => (
    <select id={id}
        className="modal-edit__selection"
        value={value}
        onChange={( evt ) => onChange( evt.target.value ) }
    >
        <optgroup label="Runway">
            <option value="default">Default</option>
            <option value="errands">Errands</option>
            <option value="30-minutes">30 Minutes</option>
            <option value="cast-topics">Cast Topics</option>
            <option value="learning">Learning</option>
            <option value="backlog">Backlog</option>
        </optgroup>

        <optgroup label="Clarify or Kick to the Future">
            <option value="needs-clarification">Needs Clarification / Splitting</option>
            <option value="ice-box">Ice Box</option>
            <option value="wontfix">Won’t Fix</option>
            <option value="revisit">Revisit</option>
        </optgroup>

        <optgroup label="Projects">
            <option value="repo-maintenance">Repo Maintenance</option>
            <option value="byte-sized-tv-improvements">ByteSized.TV Improvements</option>
            <option value="dombili-improvements">dombili Improvements</option>
            <option value="jedifocus-improvements">JediFocus Improvements</option>
        </optgroup>
        <optgroup label="Reference">
            <option value="gtd">GTD</option>
            <option value="toolbox">Toolbox</option>
            <option value="articles">Articles</option>
        </optgroup>
        <optgroup label="Queues">
            <option value="reading-queue">Reading Queue</option>
            <option value="watching-queue">Watching Queue</option>
        </optgroup>
        <optgroup label="Work">
            <option value="cisco">Cisco</option>
        </optgroup>
        <optgroup label="Test">
            <option value="demo">Demo</option>
        </optgroup>
    </select>
);

ContextDropdown.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ContextDropdown;
