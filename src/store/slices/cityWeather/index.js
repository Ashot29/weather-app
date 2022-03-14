import {createSlice} from "@reduxjs/toolkit";
import { getWeatherData } from "./cityWeatherAsync";

const initialState = {
    loading: false,
    weatherData: null,
    error: null
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
    },
    extraReducers: {
        [getWeatherData.pending]: (state, action) => state.loading = true,
        [getWeatherData.fulfilled]: (state, {payload}) => {
            state.weatherData = payload;
            state.loading = false;
        },
        [getWeatherData.rejected]: (state, {payload}) => {
            console.log(121212121)
            state.error = payload;
            state.loading = false;
        },
    }
})

export const {loadingStart, loadingEnd} = cityWeatherSlice.actions;

export default cityWeatherSlice.reducer;
