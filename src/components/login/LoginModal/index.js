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

import ActionButton from '../../../components/buttons/ActionButton';

const LoginModal = () => (
    <div className="modal-edit modal-edit__login">
        <h2 className="modal-edit__heading">
            <label className="modal-edit__heading-label">
                <strong>JediFocus</strong> — Control Your Life. Free Your Mind.
            </label>
        </h2>
        <div>
            <p className="modal-edit__login-teaser">
                During this limited preview, we are only accepting select few padawans.<br />
                Register below, and we will notify you as soon as there is an availability.</p>
            <p className="modal-edit__login-input-wrap">
                <input
                    className="modal-edit__login-input"
                    type="email" placeholder="e.g., hermione.granger@magic.wiz.uk"
                    autoFocus
                />
            </p>
            <p className="modal-edit__login-action-wrap">
                <ActionButton
                    onClick={() => {}}
                    className={'action-button--modal action-button--align-center action-button--default'}
                >Count Me In!</ActionButton>
            </p>
        </div>
    </div>
);

export default LoginModal;
