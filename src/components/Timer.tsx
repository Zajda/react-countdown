import React, { ChangeEvent } from 'react';
import moment from 'moment';
import Text from './Text';
import DateTimePicker from './DateTimePicker';
import StartButton from './StartButton';

type State = {
    countdownString: string;
    end: moment.Moment;
    pickerDisabled: boolean;
    bttDisabled: boolean;
};

type Props = {};

var ticker: NodeJS.Timeout;

class Timer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            countdownString: '',
            end: moment('04 30 2020, 2:32 pm'),
            pickerDisabled: false,
            bttDisabled: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handlePickerChange = this.handlePickerChange.bind(this);
    }

    decreaseTime() {
        let start = moment();

        let days = this.state.end.diff(start, 'days');
        let hours = this.state.end.diff(start, 'hours') % 24;
        let minutes = this.state.end.diff(start, 'minutes') % 60;
        let seconds = this.state.end.diff(start, 'seconds') % 60;

        if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
            //if over stop the ticker
            this.setState({
                countdownString: 'Finished!',
                bttDisabled: false,
                pickerDisabled: false,
            });
            clearInterval(ticker);
            return;
        }

        this.setState({
            countdownString: `in ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds.`,
        });
    }

    handleClick() {
        ticker = setInterval(() => this.decreaseTime(), 1000); // 1000 = each second
        this.setState({ bttDisabled: true, pickerDisabled: true });
    }

    handlePickerChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        this.setState({ end: moment(e.target.value) });
    }

    render() {
        return (
            <div>
                <DateTimePicker
                    date="2020-05-22T12:00"
                    disabled={this.state.pickerDisabled}
                    handleChange={this.handlePickerChange}
                />
                <StartButton text="Start" disabled={this.state.bttDisabled} handleClick={this.handleClick} />
                <Text dateToShow={this.state.countdownString} />
            </div>
        );
    }
}

export default Timer;
