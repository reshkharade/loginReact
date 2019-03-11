import React, { Component } from 'react';
import './App.scss';
import Authentication2 from '../components/authentication-2/authentication-2'
import InputBox from '../common/inputBox/inputbox'
import CheckBox from '../common/checkBox/checkbox';
import RadioButton from '../common/radioButton/radioButton';

class App extends Component {
  constructor (props){
    super(props);
    this.state={
      type : "number"
    }
  }
  render() {
    return (
      <div className="App">
        {/* <Authentication2 /> */}
        {/* <CheckBox /> */}
        <InputBox typeInfo={this.state.type} />
        <RadioButton />
      </div>
    );
  }
}

export default App;
