import constants from "../settings/constant";
import Network from "../network/network";

class WeatherAPI {
    getCityWeather(queryParams) {
        console.log('weatherAPi');
        const url = [constants.network.network_request_url.WEATHER];

        queryParams.appid = constants.network.API_KEY;

        let options = {
            queryParams: queryParams || {},
        };

        return Network.get(url, options);
    }
}

export default new WeatherAPI();
