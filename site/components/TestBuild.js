import React from 'react';
import ReactDOM from 'react-dom';

class TestBuild extends React.Component {
	render() {
		return <h1>Hello world</h1>;
	}
}

ReactDOM.render(
	<TestBuild />, 
	document.getElementById('testBuild')
);