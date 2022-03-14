import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: '',
}

export const testSlice = createSlice({
    name: 'testSlice',
    initialState,
    reducers: {
        setName: (state) => {
            state.name = 'ash'
        }
    }
})

export const {setName} = testSlice.actions;

export default testSlice.reducer;
