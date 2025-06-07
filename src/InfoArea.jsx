import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearLink, getSwapiData } from './store/swapiSlice';




function InfoArea() {

	const data = useSelector(state => state.swapi.data); 
	const dispatch = useDispatch();

	const handleClear = () => {
		dispatch(clearLink())
		dispatch(getSwapiData());
	}

	// const dataEntries = Object.entries(data.results);

	return (
		<div>
			<div>
				{JSON.stringify(data.result?.properties) || JSON.stringify(data)}
			</div> 
			<button onClick={handleClear}>clear</button>
		</div>
	);
}

export default InfoArea;