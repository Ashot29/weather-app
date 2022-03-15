import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import weatherAPI from "../../../services/api/weatherAPI";

const initialState = {
    loading: false,
    weatherData: null,
    error: null,
    cityName: '',
    description: null,
}

export const getWeatherData = createAsyncThunk('cityWeather', async (payload, {
    rejectWithValue,
    getState,
    dispatch
}) => {
    try {
        const response = await weatherAPI.getCityWeather(payload);
        console.log(response)
        return response;
    } catch (err) {
        return err;
    }
})

export const cityWeatherSlice = createSlice({
    name: 'cityWeather',
    initialState,
    reducers: {},
    extraReducers: {
        [getWeatherData.pending]: (state, action) => {
            state.loading = true
        },
        [getWeatherData.fulfilled]: (state, action) => {
            state.loading = false;
            state.weatherData = action.payload.main;
            state.description = action.payload.weather[0].description;
            state.cityName = action.payload.name;
        },
        [getWeatherData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default cityWeatherSlice.reducer;
