import React from 'react';

type Props = {
	dateToShow: string,
  }

class Text extends React.Component<Props> {
	render() {
		return (
			  <h1>{this.props.dateToShow}</h1>
		);
	  }
}



export default Text;