import { combineReducers } from "redux";
import cityWeatherReducer from "./cityWeather";
import testReducer from "./test"

const rootReducer = combineReducers({
    cityWeather: cityWeatherReducer,
    test: testReducer
});

export default rootReducer;
