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

import IconRunway from '../../../components/icons/IconRunway';
import IconLowHangingFruits from '../../../components/icons/IconLowHangingFruits';
import IconErrands from '../../../components/icons/IconErrands';
import IconBacklog from '../../../components/icons/IconBacklog';
import IconRevisit from '../../../components/icons/IconRevisit';
import IconLater from '../../../components/icons/IconLater';
import IconIceBox from '../../../components/icons/IconIceBox';

const ContextListing = ( { value, onChange, className } ) => (
    <div>
        <ul className={`context-listing ${className || ''}`}>
            <li className="context-listing__item">
                <ul>
                    <li className="context-listing__sub-item">
                        <a href="#" className={value === 'runway' ?
                            'context-listing__link context-listing__link--selected' :
                            'context-listing__link context-listing__link--default'}
                        onClick={( evt ) => {
                            evt.stopPropagation();
                            if ( value === 'runway' ) { return; }
                            onChange( 'runway' );
                        }}
                        ><IconRunway /> Runway</a></li>

                    <li className="context-listing__sub-item">
                        <a href="#" className={value === 'low-hanging-fruits' ?
                            'context-listing__link context-listing__link--selected' :
                            'context-listing__link context-listing__link--default'}
                        onClick={( evt ) => {
                            evt.stopPropagation();
                            if ( value === 'low-hanging-fruits' ) { return; }
                            onChange( 'low-hanging-fruits' );
                        }}
                        ><IconLowHangingFruits/> Low-Hanging Fruits</a></li>

                    <li className="context-listing__sub-item">
                        <a href="#" className={value === 'errands' ?
                            'context-listing__link context-listing__link--selected' :
                            'context-listing__link context-listing__link--default'}
                        onClick={( evt ) => {
                            evt.stopPropagation();
                            if ( value === 'errands' ) { return; }
                            onChange( 'errands' );
                        }}
                        ><IconErrands /> Errands</a></li>

                    <li className="context-listing__sub-item">
                        <a href="#" className={value === 'backlog' ?
                            'context-listing__link context-listing__link--selected' :
                            'context-listing__link context-listing__link--default'}
                        onClick={( evt ) => {
                            evt.stopPropagation();
                            if ( value === 'backlog' ) { return; }
                            onChange( 'backlog' );
                        }}
                        ><IconBacklog /> Backlog</a></li>
                </ul>
            </li>
            <li className="context-listing__item">
                <ul>
                    <li className="context-listing__sub-item">
                        <a href="#" className={value === 'revisit' ?
                            'context-listing__link context-listing__link--selected' :
                            'context-listing__link context-listing__link--default'}
                        onClick={( evt ) => {
                            evt.stopPropagation();
                            if ( value === 'revisit' ) { return; }
                            onChange( 'revisit' );
                        }}
                        ><IconRevisit /> Clarify / Revisit</a></li>

                    <li className="context-listing__sub-item">
                        <a href="#" className={value === 'later' ?
                            'context-listing__link context-listing__link--selected' :
                            'context-listing__link context-listing__link--default'}
                        onClick={( evt ) => {
                            evt.stopPropagation();
                            if ( value === 'later' ) { return; }
                            onChange( 'later' );
                        }}
                        ><IconLater /> Later / Maybe</a></li>

                    <li className="context-listing__sub-item">
                        <a href="#" className={value === 'ice-box' ?
                            'context-listing__link context-listing__link--selected' :
                            'context-listing__link context-listing__link--default'}
                        onClick={( evt ) => {
                            evt.stopPropagation();
                            if ( value === 'ice-box' ) { return; }
                            onChange( 'ice-box' );
                        }}
                        ><IconIceBox /> Ice Box</a></li>
                </ul>
            </li>
        </ul>
    </div>
);

import PropTypes from 'prop-types';

ContextListing.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default ContextListing;
