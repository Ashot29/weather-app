import { createAsyncThunk } from "@reduxjs/toolkit";
import weatherAPI from "../../../../services/api/weatherAPI";

export const getWeatherData = createAsyncThunk(
    'cityWeather',
    async (cityData, thunkApi) => {
        console.log('assssssssssssss');
        const response = await weatherAPI.getCityWeather(cityData);
        return response
    }
)
