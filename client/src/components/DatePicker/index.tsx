import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export class DatePick extends React.Component {
    state = {
        startDate: null
    }

    handleChange = (date:any) => {
        console.log(date)
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="hh:mm"
                timeIntervals={15}
                minDate={new Date()}
                placeholderText="Click to select a date"
                dateFormat="Pp"
            />
        );
    }
}