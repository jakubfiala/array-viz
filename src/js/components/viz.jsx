import React from 'react';
import FauxDom from 'react-faux-dom';
// wtf d3
var d3 = require('d3');

export default class Viz extends React.Component {
	constructor() {
		super();

		this.viz = FauxDom.createElement('svg');
	}

	componentWillMount() {
		d3.select(this.viz).attr('height', 300)
			.selectAll('rect')
			.data(this.props.data)
			.enter()
			.append('rect')
			.attr('y', (d) => 300 - d * 300 )
			.attr('x', (d, i) => i * 10)
			.attr('width', 8)
			.transition()
			.attr('height', (d) => d * 300 );
	}

	render() {
		let rects = d3.select(this.viz).attr('width', this.props.data.length * 10)
			.selectAll('rect')
			.data(this.props.data);

		rects.attr('y', (d) => 300 - d * 300 )
			.attr('x', (d, i) => i * 10)
			.attr('width', 8)
			.attr('height', (d) => d * 300 );

		rects.enter()
			.append('rect')
			.attr('y', (d) => 300 - d * 300 )
			.attr('x', (d, i) => i * 10)
			.attr('width', 8)
			.attr('height', (d) => d * 300 )

		rects.exit().remove();

		return (
			<div className="viz-wrapper">{ this.viz.toReact() }</div>
		);
	}
}
