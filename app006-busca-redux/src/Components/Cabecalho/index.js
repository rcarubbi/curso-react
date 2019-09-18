import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Cabecalho extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			term: '',
		};
	}

	search = () => {
		this.props.search(this.state.term);
	};

	onTermChange = event => {
		this.setState({ term: event.target.value });
	};

	clear = () => {
		this.setState({ term: '' });
		this.props.clear();
	};

	render() {
		return (
			<div>
				<input
					type='text'
					onChange={this.onTermChange}
					value={this.state.term}
				/>
				<button onClick={this.search}>Pesquisar</button>
				<button onClick={this.clear}>Limpar</button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	search: term => dispatch(actions.search(term)),
	clear: () => dispatch(actions.clear()),
});

export default connect(
	null,
	mapDispatchToProps,
)(Cabecalho);
