import React from 'react';

export default class Form extends React.Component {
	render() {
		return (
			<textarea placeholder="Paste a JSON/CSV array of Numbers here." onChange={this.props.onDataChange} />
		);
	}
}
