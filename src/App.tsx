import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Country from './Components/Country/Country';
import { useState } from 'react';
import { countryDataType, weatherDataType } from './Components/Types/countryData';

function App() {
  const [ country, setCountry] = useState<countryDataType | null>(null)
  const [ weather, setWeather] = useState<weatherDataType | null>(null)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setWeather={setWeather} setCountry={setCountry} country={country} />} />
          <Route path="/country" element={ <Country country={country} weather={weather} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
