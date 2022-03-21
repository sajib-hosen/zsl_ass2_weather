import React, { useEffect } from 'react';
import { countryDataType, weatherDataType } from '../Types/countryData';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

type countryProps = {
    country: countryDataType | null,
    weather: weatherDataType | null,
}

const Country = (props: countryProps ) => {
    const { country, weather } = props;
    const navigate = useNavigate()

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
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, height:'100%' }} >
               <Button disabled={false} variant="contained">Capital weather</Button>
            </Box>
        </div>
    );
};

export default Country;