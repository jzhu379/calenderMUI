import React, {Component} from 'react';
import './App.css';
import Calender from './Calender'
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

class App extends Component
{
  render()
  {
    return (
      <div className = 'App'>
        <MuiPickersUtilsProvider utils = {MomentUtils}>
          <Calender />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default App;
