import React from 'react';
import './radioButton.scss';

const radioButton = (props) => {
    return (
        <div className="common-radioButton">
            <label class="container">One
  <input type="radio"  name="radio" />
                <span class="checkmark"></span>
            </label>
            <label class="container">Two
  <input type="radio" name="radio" />
                <span class="checkmark"></span>
            </label>
            <label class="container">Three
  <input type="radio" name="radio" />
                <span class="checkmark"></span>
            </label>
            <label class="container">Four
  <input type="radio" name="radio" />
                <span class="checkmark"></span>
            </label>
        </div>
    );
}

export default radioButton;