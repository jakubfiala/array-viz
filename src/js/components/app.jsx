import React from 'react';
import Header from './header';
import Form from './form';
import Viz from './viz';
import vnormalize from './../utils/vnormalize';
import vdeneg from './../utils/vdeneg';
import vadd from './../utils/vadd';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};

		this.dataDidChange = (e) => {
			try {
				var parsed = JSON.parse(e.target.value);
				for (let i in parsed) {
					parsed[i] = typeof parsed[i] == 'number' ? parsed[i] : 0;
				}
			}
			catch(err) {
				var parsed = e.target.value.replace(/\n|[^0-9,\-\[\]_]+/gi, '');

				parsed = parsed.split(',');

				for (let i in parsed) {
					parsed[i] = parseFloat(parsed[i]) || 0;
				}
			}

			this.setState({
				data: vnormalize(vadd(vdeneg(parsed),0.1))
			});
		};
	}

	render() {
		return (
			<div>
				<Header />
				<Form onDataChange={this.dataDidChange} />
				<Viz data={this.state.data}/>
			</div>
		);
	}
}
