import React from 'react';

function renderRow(result, index) {
	return (
		<tr key={index}>
			<td>{result.title}</td>
		</tr>
	);
}

function Cabecalho(props) {
	return (
		<div>
			<p>Mostrando resultados para "{props.term}"</p>
			<table>
				<tbody>
					{props.results.map((row, index) => renderRow(row, index))}
				</tbody>
			</table>
		</div>
	);
}

export default Cabecalho;
