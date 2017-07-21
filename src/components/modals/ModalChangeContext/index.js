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

const ModalChangeContext = ( { show, changeContext, context } ) => show ? (
    <div className="modal-edit">
        <h2 className="modal-edit__heading"><label>Change Current Context</label></h2>

        <h3 className={`modal-edit__label modal-edit__label--centered
            modal-edit__label--top-pushed`}>
            <label htmlFor="modal-edit-context">Select the context you want to switch to</label>:
        </h3>

        <div className="modal-edit__body">
            <select id="modal-edit-context"
                className={`modal-edit__selection modal-edit__selection--inline
                    modal-edit__selection--larger modal-edit__selection--margin-adjust`}
                value={context}
                onChange={( evt ) => changeContext( evt.target.value ) }
            >
                <optgroup label="Clarify or Kick to the Future">
                    <option value="needs-clarification">Needs Clarification / Splitting</option>
                    <option value="ice-box">Ice Box</option>
                </optgroup>
                <optgroup label="Basic">
                    <option value="default">Default</option>
                    <option value="30-minutes">30 Minutes</option>
                    <option value="cast-topics">Cast Topics</option>
                    <option value="learning">Learning</option>
                    <option value="backlog">Backlog</option>
                </optgroup>
                <optgroup label="Projects">
                    <option value="repo-maintenance">Repo Maintenance</option>
                    <option value="byte-sized-tv-improvements">ByteSized.TV Improvements</option>
                    <option value="jedifocus-improvements">JediFocus Improvements</option>
                </optgroup>
                <optgroup label="Queues">
                    <option value="reading-queue">Reading Queue</option>
                    <option value="watching-queue">Watching Queue</option>
                </optgroup>
                <option value="cisco">Cisco</option>
            </select>
        </div>
    </div>
) : null;

ModalChangeContext.defaultProps = {
    show: false
};

ModalChangeContext.propTypes = {
    show: PropTypes.bool,
    context: PropTypes.string.isRequired,
    changeContext: PropTypes.func.isRequired
};

export default ModalChangeContext;
