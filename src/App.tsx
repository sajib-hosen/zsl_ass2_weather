import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Country from './Components/Country/Country';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:countryName" element={ <Country/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
