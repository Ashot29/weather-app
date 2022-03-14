import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import weatherAPI from "../../services/api/weatherAPI";
import {loadingStart, loadingEnd} from "../../store/slices/cityWeather";

export default function Searchbar() {
    const searchInputref = useRef();
    // const loading = useSelector((state) => state.cityWeather.loading)
    const dispatch = useDispatch()
    const [weather, setWeather] = useState({})

    useEffect(() => {
        // weatherAPI.getCityWeather({q: 'Yerevan'})
        //     .then(resp => setWeather(resp))
        dispatch(loadingStart())
        dispatch(loadingEnd())
    }, [])

    return (
        <div className="dashboard-searchbar-wrapper">
            <input className="dashboard-searchbar" placeholder="Enter city name here" ref={searchInputref} />
        </div>
    );
}
