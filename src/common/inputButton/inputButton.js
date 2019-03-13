/**
 * Component : Generic Component for Input Type
 * @author: Reshma Kharade
 * @date: 11/03/2019
 */
import React from 'react';
import './inputButton.scss';

/**
 * Input Button : Can be use for all input button across the application
 * @param {buttonType} props String Type Input button
 */
const radioButton = (props) => {
    return <label className="input-buttons">{props.buttonType}
        <input type="radio" name="radio" />
        <span className="checkmark"></span>
    </label>;
};

const checkbox = (props) => {
    return <label className="input-buttons input-checkbox">{props.buttonType}
        <input type="checkbox" name="checkbox" />
        <span className="checkmark"></span>
    </label>;
};

const inputButton = (props) => {
    // console.log(props.buttonType);

    switch (props.buttonType) {
        case 'radio':
            return radioButton(props);
        case 'checkbox':
            return checkbox(props);
        default:
            return null;

    }
}


export default inputButton;