/**
 * Component : Generic Component for Date Selector
 * @author: Reshma Kharade
 * @date: 12/03/2019
 */

import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './datePicker.scss';


class Date_Picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
        this.props.onDateSelect(date);
    }

    render() {
        return (
            <div className="common-date-selector">
                <DatePicker className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
            </div>

        );
    }
}

export default Date_Picker;