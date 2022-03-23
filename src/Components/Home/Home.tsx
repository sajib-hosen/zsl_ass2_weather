import React, { useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [searchData, setSearchData] = useState<string | null >(null);
    const navigate = useNavigate();

    const getData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{ //getting input data from user
        setSearchData(e.target.value)
    }

    const handleSearch = () =>{  // on serch button click, change the state and call API
        navigate(`/${searchData}`)  // navagating the page to country page
    }

    return (
        <Container style={{ backgroundImage:'url(http://www.clipartsuggest.com/images/586/cartoon-world-map-simple-map-of-europe-Bt9VIH-clipart.jpeg)', backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment: 'fixed', backgroundRepeat:'no-repeat'}} sx={{ height: '100%', padding: `19%`, display:"flex", justifyContent:'center', alignItems:"center"}} maxWidth="xl">
            <Box display='flex' flexDirection='row' justifyContent='center' sx={{ width:"300px", p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, height:'100%' }} >
              <TextField onChange={(e)=>{getData(e)}} id="outlined-basic" label="Enter country" variant="outlined"></TextField>
              <Button sx={{marginLeft:'7px'}} onClick={handleSearch} disabled={!Boolean(searchData)} variant="contained">Search</Button>
            </Box>
        </Container>
    );
};

export default Home;