import React from 'react';
import './checkbox.scss';


const checkBox = (props) => {
    return (
        <div className="common-checkbox">
            <label class="container">
  <input type="checkbox" checked="checked" />one
                <span class="checkmark"></span>
            </label>
            <label class="container">
  <input type="checkbox" />Two
                <span class="checkmark"></span>
            </label>
            <label class="container">
  <input type="checkbox" />Three
                <span class="checkmark"></span>
            </label>
            <label class="container">
  <input type="checkbox" />Four
                <span class="checkmark"></span>
            </label>
        </div>
    );

}

export default checkBox;