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
    <div className="modal-edit" style={{boxShadow: '0 0 2px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.32))', height: '210px'}}>
        <h2 className="modal-edit__heading" style={{xbackground: '#ed6c1f', colxor: '#0000000'}}>
            <label className="modal-edit__heading-label">
                <strong>JediFocus</strong> — Control Your Life. Free Your Mind.
            </label>
        </h2>
        <div>
            <p style={{fontSize: '18px', fontStyle: 'italic', fontFamily: 'Georgia Pro Lt It', lineHeight: '30px', textAlign: 'center', marginTop: '28px', marginBottom: '10px'}}>

                           During this limited preview, we are only accepting select few padawans.<br />
            Register below, and we will notify you as soon as there is an availability.</p>
            <p style={{textAlign: 'center', marginTop: '10px'}}>
                <input type="email" placeholder="e.g., hermione.granger@magic.wiz.uk" 
                    style={{border: '1px #babfc3 solid', fontSize: '18px', fontFamily: 'Georgia Pro Reg', width: '350px', marginLeft: '30px', padding: '10px', textAlign: 'center', float: 'left'}}
                    autofocus
                />
            </p>
            <p style={{marginRight: '20px', marginTop: '2px', textAlign: 'center', float: 'right'}}>
                <ActionButton
                    onClick={() => {}}
                    className={'action-button--modal action-button--align-center action-button--default'}
                >Count Me In!</ActionButton>
            </p>
        </div>
    </div>
);

export default LoginModal;
