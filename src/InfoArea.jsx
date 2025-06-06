import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearLink } from './store/swapiSlice';




function InfoArea() {

	const data = useSelector(state => state.swapi.data); 
	const dispatch = useDispatch();


	return (
		<div>
			<div>{JSON.stringify(data)}</div> 
			<button onClick={()=> dispatch(clearLink())}>clear</button>
		</div>
	);
}

export default InfoArea;