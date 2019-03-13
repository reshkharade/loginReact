/**
 * Component : Generic Component for Input Type
 * @author: Reshma Kharade
 * @date: 11/03/2019
 */

import React from 'react';
import './inputbox.scss';


/**
 * Input Box : Can be use for all input box across the application
 * @param {typeInfo} props String Type Inputbox
 * @param {placeholder} props String placeholder text for input
 * @param {change} props event event generate on change of input field
 */
const inputBox = (props) => {
    return (
        <div className="common-inputbox">
            <input type={props.typeInfo} className="form-control" onChange={props.change} placeholder={props.placeholder} />
        </div>
    );
}

export default inputBox;
