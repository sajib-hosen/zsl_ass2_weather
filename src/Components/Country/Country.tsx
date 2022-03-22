import React, { useEffect, useState } from 'react';
import { countryDataType, weatherDataType } from '../Types/countryData';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

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
    // console.log(country, weather)

    useEffect(()=>{ // if data losed user will be taken to the home page
        if( country === null){
            navigate(`/`)
        }
    },[ country ])

    return (
        <div style={{}}>
            <Box width='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center' ><br />
                <Typography variant='h3'>{country?.country.toUpperCase()}</Typography> <br />
                <Box display='flex' flexDirection='row' >
                    <img height='150px' src={country?.flags.png} alt="flag" />
                    <Box sx={{ textAlign: 'left', marginLeft: '10px' }}>
                        <p>Capital: {country?.capital[0]}</p>
                        <p>Population: { country?.population}</p>
                        <p>Latitude: {country?.latlng[0]}</p>
                        <p>Longitude: {country?.latlng[1]}</p>
                    </Box>
                </Box>
            </Box>
            
            { weatherShow ?  <div>
                <img style={{borderRadius:'50%'}} src={weather?.weatherIcon} alt="weather icon" />
                <p>Temperature: {weather?.temperature}</p>
                <p>Wind Speed: {weather?.windSpeed}</p>
                <p>Precip: {weather?.precip}</p>
            </div> : 
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, height:'100%' }} >
                <Button onClick={()=>{showWeather(true)}} disabled={false} variant="contained">Capital weather</Button>
            </Box> }

            <Button >
                <Link to='/' >Back Home</Link>
            </Button>
        </div>
    );
};

export default Country;