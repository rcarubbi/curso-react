import React, { useState, useEffect } from 'react';
import Cabecalho from './Components/Cabecalho';
import Corpo from './Components/Corpo';
import './App.css';

function App() {
	const [results, setResults] = useState([]);
	const [term, setTerm] = useState('');
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/todos/`)
			.then(res => res.json())
			.then(response => {
				const filter = (term, results) => {
					return results.filter(u => u.title.includes(term));
				};

				var filteredResults = filter(term, response);
				return setResults(filter(term, filteredResults));
			})
			.catch(error => console.log(error));
	}, [term]);
	return (
		<div className='App'>
			<Cabecalho term={term} setTerm={setTerm} />
			<Corpo results={results} term={term} />
		</div>
	);
}

export default App;
