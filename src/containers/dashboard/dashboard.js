import React from 'react';
import Searchbar from '../../components/dashboard/searchbar';
import WeatherCard from '../../components/dashboard/weatherCard';
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className='dashboard-wrapper'>
        <div className='dashboard-main'>
            <Searchbar />
            <WeatherCard />
        </div>
    </div>
  )
}
