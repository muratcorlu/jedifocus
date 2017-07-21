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

import ActionButton from '../../../components/buttons/ActionButton';

const ModalEdit = ( {
    show, bucket, context, item, id,
    updateDescription, updateBucket, updateContext, saveGoal
} ) => show ? (
    <div className="modal-edit">
        <h2 className="modal-edit__heading"><label htmlFor="modal-edit-description">Describe Your Goal</label></h2>

        <div>
            <textarea id="modal-edit-description" className="modal-edit__description"
                value={item}
                onChange={( evt ) => updateDescription( bucket, id, evt.target.value )}
                placeholder="What would you like to do?"
                autoFocus={!item}
            />
        </div>

        <h3 className="modal-edit__label modal-edit__label--floated modal-edit__label--floated-first">
            <label htmlFor="modal-edit-column">Stage</label></h3>
        <div>
            <select id="modal-edit-column" className="modal-edit__selection"
                value={bucket}
                onChange={( evt ) => updateBucket( bucket, id, evt.target.value )}
            >
                <option value="bestIntentions">Best Intentions</option>
                <option value="toDo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
            </select>
        </div>

        <h3 className="modal-edit__label modal-edit__label--floated">
            <label htmlFor="modal-edit-column">Context</label></h3>
        <div>
            <select id="modal-edit-column" className="modal-edit__selection"
                value={context}
                onChange={( evt ) => updateContext( bucket, id, evt.target.value )}
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

        <div className="modal-edit__actions">
            <ActionButton text="Done"
                onClick={() => saveGoal()}
            />
        </div>
    </div>
) : null;

ModalEdit.defaultProps = {
    show: false
};

ModalEdit.propTypes = {
    bucket: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    saveGoal: PropTypes.func.isRequired,
    show: PropTypes.bool,
    updateBucket: PropTypes.func.isRequired,
    updateDescription: PropTypes.func.isRequired,
    updateContext: PropTypes.func.isRequired
};

export default ModalEdit;
