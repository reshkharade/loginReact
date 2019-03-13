/**
 * Component : Generic Component for Input Type
 * @author: Reshma Kharade
 * @date: 12/03/2019
 */

import React, { Component } from 'react';
import './dropDown.scss';
import Select from 'react-select'


const styles = {
    control: (base) => ({
        ...base,
        minHeight: 30,
        maxheight: 30
    }),
    dropdownIndicator: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
    }),
    clearIndicator: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
    }),
};


const dropDownButton = (props) => {
    return (
        <div className="common-dropdown ">
            <Select className="select-custom-style css-10nd86i" options={props.dropDownList}
                styles={styles}
                onChange={props.onSelectDropDownValue} />
        </div>
    );
}

export default dropDownButton;