import React, { useEffect, useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { countryDataType, weatherDataType } from '../Types/countryData';
type homeProps = {
    setCountry: React.Dispatch<React.SetStateAction<countryDataType | null>>,
    setWeather: React.Dispatch<React.SetStateAction<weatherDataType | null>>
    country: countryDataType | null,
}

const Home = ( props: homeProps ) => {
    const { setWeather, setCountry, country } = props;
    const [searchData, setSearchData] = useState<string | null >(null);
    const [callCountryAPI, setCallCountryAPI] = useState<string>('');
    const navigate = useNavigate();

    const getData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{ //getting input data from user
        setSearchData(e.target.value)
    }

    const handleSearch = () =>{  // on serch button click, change the state and call API
        if(typeof searchData === 'string'){
            setCallCountryAPI(searchData)
        }
    }

    useEffect(()=>{  // calling Country API in change of "callCountryAPI" or on Search button clicked
    if(callCountryAPI){
        fetch(`https://restcountries.com/v3.1/name/${callCountryAPI}`)
        .then(res => res.json())
        .then(data =>{
            if(data.status === 404){
                console.log('data not found')
                console.log(data)
            }
            else{
                    const contryData = {
                    country: callCountryAPI,
                    capital: data[0].capital,
                    latlng: data[0].latlng,
                    population: data[0].population,
                    flags: data[0].flags,
                }
                setCountry(contryData)
                navigate(`/country`)  // navagating the page to country page
            }
        })
    }
    },[callCountryAPI])

    useEffect(()=>{ // getting weather data on every time country state change
        if(country?.population){
            fetch(`http://api.weatherstack.com/current?access_key=b3e1cf02fa83d3e62042d571ec252620&query=${callCountryAPI}`)
            .then(res => res.json())
            .then( weather =>{
                const currentWeather = {
                    temperature: weather.current.temperature,
                    weatherIcon: weather.current.weather_icons[0],
                    windSpeed: weather.current.wind_speed, 
                    precip: weather.current.wind_speed,
                }
                setWeather(currentWeather)
                console.log(currentWeather)
            })
        }
    },[ country ])
  
    return (
        <Container maxWidth="xl">
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, height:'100%' }} >
              <TextField onChange={(e)=>{getData(e)}} id="outlined-basic" label="Enter country" variant="outlined"></TextField>
              <Button onClick={handleSearch} disabled={!Boolean(searchData)} variant="contained">Search</Button>
            </Box>
        </Container>
    );
};

export default Home;