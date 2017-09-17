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
    <div className="modal-edit">
        <h2 className="modal-edit__heading">
            <label className="modal-edit__heading-label">
                <strong>JediFocus</strong> Limited Preview
            </label>
        </h2>
        <div>
            <p style={{fontSize: '18px', lineHeight: '30px', textAlign: 'center', marginTop: '55px', marginBottom: '10px'}}>

                <strong>JediFocus</strong> is a <em>minimalistic</em> and <em style={{borderBottom: '1px #000000 solid', paddingBottom: '2px'}}>opinionated</em> application that helps you <strong>control</strong> your life, <strong>organize</strong> your goals, and <strong>free</strong> your mind.<br /> 
            </p>
            <p style={{fontSize: '18px', lineHeight: '30px', textAlign: 'center', marginTop: '20px', marginBottom: '10px'}}>

                           We are accepting a <strong>very</strong> limited number of individuals, initially.<br />
            Register your email and we will notify you as soon as there is an open spot.</p>
            <p style={{textAlign: 'center', marginTop: '30px'}}>
                <input type="email" placeholder="e.g., hermione.granger@magic.wiz.uk" 
                    style={{border: '1px #babfc3 solid', fontSize: '18px', fontFamily: 'Georgia Pro Reg', width: '350px', marginLeft: '30px', padding: '10px', textAlign: 'center', float: 'left'}}
                    autofocus
                />
            </p>
            <p style={{marginRight: '20px', marginTop: '12px', textAlign: 'center', float: 'right'}}>
                <ActionButton
                    onClick={() => {}}
                    className={'action-button--modal action-button--align-center action-button--default'}
                >Count Me In!</ActionButton>
            </p>
        </div>
    </div>
);

export default LoginModal;
