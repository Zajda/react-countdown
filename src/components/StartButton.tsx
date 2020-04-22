import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

type Props = {
  text: string,
  disabled: boolean,
  handleClick: () => void
  }

class StartButton extends Component<Props> {
  render() {
    return <Button onClick={this.props.handleClick} disabled={this.props.disabled} variant="outlined" color="primary">{this.props.text}</Button>
  }
}

export default StartButton;