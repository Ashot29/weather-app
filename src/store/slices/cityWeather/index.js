import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
}

export const cityWeatherSlice = createSlice({
    name: 'cityWeather',
    initialState,
    reducers: {
        loadingStart: (state) => {
            state.loading = true
        },
        loadingEnd: (state) => {
            state.loading = false
        }
    }
})

export const {loadingStart, loadingEnd} = cityWeatherSlice.actions;

export default cityWeatherSlice.reducer;
