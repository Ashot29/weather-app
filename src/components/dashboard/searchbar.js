import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {getWeatherData} from "../../store/slices/cityWeather";


export default function Searchbar() {
    const searchInputref = useRef();
    const dispatch = useDispatch();

    const getWeather = (data) => dispatch(getWeatherData(data));

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeather({q: searchInputref.current.value});
        searchInputref.current.value = '';
    };

    return (
        <form
            className="dashboard-searchbar-wrapper"
            onSubmit={handleSubmit}
        >
            <input
                className="dashboard-searchbar"
                placeholder="Enter city name here"
                ref={searchInputref}
            />
        </form>
    );
}
