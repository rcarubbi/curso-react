import React from 'react';
import { connect } from 'react-redux';

function resultRow(result, index) {
	return (
		<tr key={index}>
			<td>{result.title}</td>
		</tr>
	);
}

function Corpo(props) {
	return (
		<div>
			<p>Mostrando resultados para "{props.term}"</p>
			<table>
				<tbody>{props.results.map(resultRow)}</tbody>
			</table>
		</div>
	);
}

const mapStateToProps = state => ({
	results: state.pesquisaData.results,
	term: state.pesquisaData.term,
});

export default connect(mapStateToProps)(Corpo);
