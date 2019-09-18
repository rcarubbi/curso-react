import React from 'react';

function Cabecalho(props) {
	const termChanged = function termChangedHandler(e) {
		props.setTerm(e.target.value);
	};

	return (
		<div>
			<input type='text' onChange={termChanged} value={props.term} />
		</div>
	);
}

export default Cabecalho;
