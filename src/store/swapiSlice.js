import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


const initialState = {
	base: 'https://www.swapi.tech/api/', 
	currValue: '',
	data: {}
};



export const getSwapiData = createAsyncThunk('swapi/getData', async (_, thunkAPI) => {
	const state = thunkAPI.getState().swapi;
	if(state.currValue !== ''){
		const response = await fetch(state.base + state.currValue);
		const result = await response.json();
		return result
	}
	
	return '';
});


const swapiSlice = createSlice({
	initialState, 
	name: 'swapi',
	reducers: {
		addLink: (state, action) =>{
			state.currValue = action.payload;
		},
		clearLink: (state, action)=>{
			state.currValue = '';
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getSwapiData.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(getSwapiData.rejected, (state) => {
				state.data = {};
			});
	}
});

export const {addLink, clearLink} = swapiSlice.actions;

export default swapiSlice.reducer;

