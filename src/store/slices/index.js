import { combineReducers } from "redux";
import cityWeatherSlice from "./cityWeather";
import testReducer from "./test"

const rootReducer = combineReducers({
    cityWeather: cityWeatherSlice,
    test: testReducer
});

export default rootReducer;
