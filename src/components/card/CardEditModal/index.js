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

import ActionButton from '../../../components/buttons/ActionButton';
import CardDescriptionTextarea from '../../../components/card/CardDescriptionTextarea';

import IconSave from '../../../components/icons/IconSave';

const IconMove = () => (
    <svg version="1.1" width="36" height="36" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet">
        <path d="M31,5H5A2,2,0,0,0,3,7V29a2,2,0,0,0,2,2H31a2,2,0,0,0,2-2V7A2,2,0,0,0,31,5ZM13,29H5V7h8Zm10,0H15V7h8Z" />
        <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </svg>
);

const CardEditModal = ( {
    show, reveal, column, context, description, id, showMoveOptions,
    updateCardDescription, switchToMoveMode, saveCard, updateCardColumn, updateCardContext
} ) => show ? (
    showMoveOptions ?
        <div className={`modal-edit ${reveal ? '' : 'modal-edit--faded'}`}>
            <h2 className="modal-edit__heading">
                <label
                    className="modal-edit__heading-label"
                    htmlFor="modal-edit-description">Goal Details</label>
            </h2>

            <div className="modal-edit__configuration-body">
                <div className="modal-edit__configuration-columns">
                    <h3>Goal Column</h3>
                    <ul>
                        <li style={{ listStyle: 'none', marginLeft: '0' }}
                            onClick={() => updateCardColumn( column, id, 'bestIntentions' )}>
                            <input type="radio" name="column" id="column-best-intentions"
                                checked={column === 'bestIntentions'} readOnly
                            /> <label htmlFor="column-best-intentions">Best Intentions</label></li>
                        <li style={{ listStyle: 'none', marginLeft: '0' }}
                            onClick={() => updateCardColumn( column, id, 'toDo' )}>
                            <input type="radio" name="column" id="column-to-do"
                                checked={column === 'toDo' } readOnly
                            /> <label htmlFor="column-to-do">To Do</label></li>
                        <li style={{ listStyle: 'none', marginLeft: '0' }}
                            onClick={() => updateCardColumn( column, id, 'inProgress' )}>
                            <input type="radio" name="column" id="column-in-progress"
                                checked={column === 'inProgress' } readOnly
                            /> <label htmlFor="column-in-progress">In Progress</label></li>
                    </ul>
                </div>

                <div className="modal-edit__configuration-contexts">
                    <h3>Goal Context</h3>
                    <div style={{ display: 'flex' }}>
                        <ul style={{ flexBasis: '50%' }}>
                            <li style={{ listStyle: 'none', marginLeft: '0' }}
                                onClick={() => updateCardContext( column, id, description, 'runway' )}>
                                <input type="radio" name="context" id="context-runway"
                                    checked={context === 'runway'} readOnly
                                /> <label htmlFor="context-runway">Runway</label></li>
                            <li style={{ listStyle: 'none', marginLeft: '0' }}
                                onClick={() => updateCardContext( column, id, description, 'low-hanging-fruits' )}>
                                <input type="radio" name="context" id="context-low-hanging-fruits"
                                    checked={context === 'low-hanging-fruits'} readOnly
                                /> <label htmlFor="context-low-hanging-fruits">Low-Hanging Fruits</label></li>
                            <li style={{ listStyle: 'none', marginLeft: '0' }}
                                onClick={() => updateCardContext( column, id, description, 'errands' )}>
                                <input type="radio" name="context" id="context-errands"
                                    checked={context === 'errands'} readOnly
                                /> <label htmlFor="context-errands">Errands</label></li>
                            <li style={{ listStyle: 'none', marginLeft: '0' }}
                                onClick={() => updateCardContext( column, id, description, 'backlog' )}>
                                <input type="radio" name="context" id="context-backlog"
                                    checked={context === 'backlog'} readOnly
                                /> <label htmlFor="context-backlog">Backlog</label></li>
                        </ul>

                        <ul style={{ flexBasis: '50%' }}>
                            <li style={{ listStyle: 'none', marginLeft: '0' }}
                                onClick={() => updateCardContext( column, id, description, 'later' )}>
                                <input type="radio" name="context" id="context-later"
                                    checked={context === 'later'} readOnly
                                /> <label htmlFor="context-later">Later/Maybe</label></li>
                            <li style={{ listStyle: 'none', marginLeft: '0' }}
                                onClick={() => updateCardContext( column, id, description, 'revisit' )}>
                                <input type="radio" name="context" id="context-revisit"
                                    checked={context === 'revisit'} readOnly
                                /> <label htmlFor="context-revisit">Clarify/Revisit</label></li>
                            <li style={{ listStyle: 'none', marginLeft: '0' }}
                                onClick={() => updateCardContext( column, id, description, 'ice-box' )}>
                                <input type="radio" name="context" id="context-ice-box"
                                    checked={context === 'ice-box'} readOnly
                                /> <label htmlFor="context-ice-box">Ice Box</label></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="modal-edit__actions" style={{ clear: 'both' }}>
                    <a href="#" style={{ display: 'block', float: 'left',
                        marginTop: '10px', textAlign: 'left', marginLeft: '20px', color: '#000000',
                        borderBottom: '1px #000000 solid' }}
                    onClick={() => updateCardColumn( column, id, 'done' )}
                    >I’m <strong>done</strong> — delete this goal</a>

                    <ActionButton
                        onClick={() => saveCard()}
                        disabled={description.trim() === ''}
                        className={`action-button--modal action-button--align-center
                            ${description.trim() === '' ? '' : 'action-button--default'}`}
                    >apply changes <IconSave /></ActionButton>
                </div>
            </div>
        </div>
        :
        <div className={`modal-edit ${reveal ? '' : 'modal-edit--faded'}`}>
            <h2 className="modal-edit__heading">
                <label
                    className="modal-edit__heading-label"
                    htmlFor="modal-edit-description">Goal Description</label>
            </h2>

            <div>
                <CardDescriptionTextarea id="modal-edit-description" value={description}
                    onChange={( value ) => updateCardDescription( column, id, value, context )} />
            </div>

            <div className="modal-edit__actions">
                <a href='#' className="action-link--modal"
                    onClick={() => switchToMoveMode()}
                ><IconMove /> <strong>move</strong> or <strong>delete</strong> this goal</a>

                <ActionButton
                    onClick={() => saveCard()}
                    disabled={description.trim() === ''}
                    className={`action-button--modal action-button--align-center
                        ${description.trim() === '' ? '' : 'action-button--default'}`}
                >save this goal <IconSave /></ActionButton>
            </div>
        </div>
) : null;

CardEditModal.defaultProps = { show: false };

CardEditModal.propTypes = {
    column: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    reveal: PropTypes.bool,
    saveCard: PropTypes.func.isRequired,
    show: PropTypes.bool,
    updateCardDescription: PropTypes.func.isRequired,
    switchToMoveMode: PropTypes.func.isRequired,
    showMoveOptions: PropTypes.bool.isRequired,
    updateCardColumn: PropTypes.func.isRequired,
    updateCardContext: PropTypes.func.isRequired
};

export default CardEditModal;
