import React, {PureComponent} from 'react';
import {DatePicker} from 'material-ui-pickers';

class Calender extends PureComponent
{
  state = {selectedDate: null}

  getMinDate = () =>
  {
    const date = new Date();
    let minDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2);
    return minDate;
  }

  getMaxDate = () =>
  {
    const date = new Date();
    let maxDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 28);
    return maxDate;
  }

  dateToString = (date) =>
  {
    const tempDate = date.toDate();
    return [tempDate.getFullYear(), tempDate.getMonth() + 1, tempDate.getDate()].join(' / ');
  }

  dateChangeHandler = (date) => {this.setState({selectedDate: date});}

  render()
  {
    let msg = (this.state.selectedDate === null) ? 'select a date above ↑' :
      'selected date (Y / M / D): ' + this.dateToString(this.state.selectedDate);

    return (
      <div>
        <DatePicker
        label = 'SELECT DATE:'
        minDateMessage = 'reservations must be made 2 days in advance'
        maxDateMessage = 'reservations past 2 weeks cannot be made'
        value = {this.state.selectedDate}
        onChange = {this.dateChangeHandler}
        maxDate = {this.getMaxDate()}
        minDate = {this.getMinDate()}
        />
        <p> {msg} </p>
      </div>
    );
  }
}

export default Calender;