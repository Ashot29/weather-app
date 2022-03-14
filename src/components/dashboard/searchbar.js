import React, {useEffect, useRef, useState} from "react";
import Network from "../../services/network/network";
import weatherAPI from "../../services/api/weatherAPI";
import constants from "../../services/settings/constant";

export default function Searchbar() {
    const searchInputref = useRef();
    const [weather, setWeather] = useState({})

    useEffect(() => {
        weatherAPI.getCityWeather({q: 'Yerevan'})
            .then(resp => setWeather(resp))
    }, [])

    return (
        <div className="dashboard-searchbar-wrapper">
            <input className="dashboard-searchbar" placeholder="Enter city name here" ref={searchInputref} onSubmit={() => console.log(12121212)}/>
        </div>
    );
}
