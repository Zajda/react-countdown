import React, { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
    date: string;
    disabled: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

type State = {
    userDate: string;
};

class DateTimePicker extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userDate: this.props.date,
        };    
  }

    render() {
        return (
            <TextField
                id="datetime-local"
                label="Choose time and date:"
                type="datetime-local"
                disabled={this.props.disabled}
                defaultValue={this.state.userDate}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={this.props.handleChange}
            />
        );
    }
}
export default DateTimePicker;
