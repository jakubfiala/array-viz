import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<h1>
					array<strong>viz</strong>
				</h1>
				<h3>A simple <strong>numeric</strong> array visualisation tool.</h3>
				<p>
					built by <a target="_blank" href="/">fiala</a> using <a target="_blank" href="http://d3js.org/">d3</a> and <a target="_blank" href="http://facebook.github.io/react/">react.</a>
				</p>
			</header>
		);
	}
}
