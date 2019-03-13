import React, { Component } from 'react';
import './App.scss';
import Authentication2 from '../components/authentication/authentication'
import InputBox from '../common/inputBox/inputbox'
import InputButton from '../common/inputButton/inputButton';
import SearchBox from '../common/searchBox/searchBox';
import DatePicker from '../common/datePicker/datePicker';
import DropDown from '../common/inputButton/dropDown';
import list from '../assests/list.json';
import dropDownList from '../assests/dropDownList.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "password",
      buttonType: "radio",
      username: ''
    }

    this.onSearchItemSelect = this.onSearchItemSelect.bind(this);
    this.onDateSelect = this.onDateSelect.bind(this);
    this.onSelectDropDownValue = this.onSelectDropDownValue.bind(this);
  }

  onSearchItemSelect = (event, item) => {
    console.log("selected Item", item);
  }

  onDateSelect = (date) => {
     console.log("Received Date =", date);
  }

  onSelectDropDownValue = (value) => {
    console.log("Selected Value = ",value);
  }

  render() {
    return (
      <div className="App">
        {/* <Authentication2 /> */}
        {/* <CheckBox /> */}
        {/* <InputBox typeInfo={this.state.type} />
        <InputButton  buttonType={this.state.buttonType}/>
        <InputButton  buttonType="checkbox"/> */}
        {/* <SearchBox suggestionsList={list} matchKey="name" onSearchItemSelect={this.onSearchItemSelect}/> */}
        <DropDown dropDownList={dropDownList} onSelectDropDownValue={this.onSelectDropDownValue}/>
        <DatePicker onDateSelect={this.onDateSelect} />
      </div>
    );
  }
}

export default App;
