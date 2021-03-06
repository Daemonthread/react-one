import React from "react";
import Grid from 'react-bootstrap';

import Movie from "./body/movie"
import Selector from "./body/selector"

export default class Body extends React.Component {
    constructor () {
	super();
	this.state = {
	    value: ""
	}
    }
    setSelectorValue(value) {
	this.setState({value})
    }
    render_movie(arr) {
	return arr.map((m, index) => <Movie key={index} playable={m} changeValue={this.setSelectorValue.bind(this)} />);
    }
    render() {
	return (
	    <Grid>
			{this.render_movie(this.props.playables)}
			<Selector value={this.state.value} />
	    </Grid>
	)
    }
}