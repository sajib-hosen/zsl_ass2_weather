import React, { useEffect, useState } from 'react';
import { countryDataType, weatherDataType } from '../Types/countryData';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

type countryProps = {
    country: countryDataType | null,
    weather: weatherDataType | null,
}

const Country = (props: countryProps ) => {
    const { country, weather } = props;
    const navigate = useNavigate()
    const [ weatherShow, setWeatherShow ] = useState(false)

    const showWeather = ( shouldShow: boolean )=>{
        setWeatherShow(shouldShow)
    }

    console.log(country, weather)

    useEffect(()=>{ // if data losed user will be taken to the home page
        if( country === null){
            navigate(`/`)
        }
    },[ country ])

    return (
        <div>
            <h1>{ country?.country}</h1>
            <p>capital: {country?.capital[0]}</p>
            <p>population: { country?.population}</p>
            <img src={country?.flags.png} alt="flag" />
            <p>latitude: {country?.latlng[0]} and longitude: {country?.latlng[1]} </p>
            { weatherShow ?             <div>
                <img src={weather?.weatherIcon} alt="weather icon" />
                <p>Temperature: {weather?.temperature}</p>
                <p>Wind Speed: {weather?.windSpeed}</p>
                <p>Precip: {weather?.precip}</p>
            </div> : 
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, height:'100%' }} >
                <Button onClick={()=>{showWeather(true)}} disabled={false} variant="contained">Capital weather</Button>
            </Box> }

            <Button >
                <Link to='/'  >Back Home</Link>
            </Button>
        </div>
    );
};

export default Country;