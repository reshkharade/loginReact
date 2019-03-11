import React from 'react';
import './inputbox.scss';


const inputBox = (props) => {
    const inputType = props.typeInfo;
    return (
        <div className="common-inputBox">
            <input type={inputType} className="form-control" placeholder="type" />
        </div>
    );
}

export default inputBox;
