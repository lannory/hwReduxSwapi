import React, { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addLink, getSwapiData } from './store/swapiSlice';


function SearchForm() {
	
	
	const dispatch = useDispatch();

	const textRef = useRef();


	const handleSumbit = () =>{
		dispatch(addLink(textRef.current.value));
		dispatch(getSwapiData());
	}


	return (
		<div>
			<form action="">
				<p>https://www.swapi.tech/api/</p>
				<input type="text" ref={textRef}/>
				<button type='button' onClick={handleSumbit}>get info</button>
			</form>
		</div>
	);
}

export default SearchForm;