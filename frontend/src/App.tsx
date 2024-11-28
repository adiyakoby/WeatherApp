import { useEffect, useState } from "react";
import InputBox from './Components/InputBox'
import WeatherBox, {WeatherBoxProps} from './Components/WeatherBox'
import './App.css'
import 'typeface-heebo';

const API_URL = import.meta.env.VITE_API_URL;


function App() {
  
  const [weatherData, setweatherData] = useState<WeatherBoxProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches weather data from the backend API using the given location.
   * 
   * @param search - The location (city name or coordinates) to fetch data for.
   */
  const fetchData = async (search: string | any) => {
      try {
        setError(null);
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({'location': search})
        };

      const response = await fetch(API_URL || 'http://localhost:5001/api', options)

      if (response.ok) {
        const data = await response.json();
        setweatherData(data);
      } else {
        setError("No data found for the given location.");
        
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {

      // Automatically fetch weather data based on geolocation or default places
      const locationFetch = () => {
        
      const places = ['Tel Aviv', 'London', 'Tokyo', 'Washington', 'Paris']

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((res: GeolocationPosition) => {
          
        const {latitude, longitude} = res.coords;
        fetchData(`${latitude},${longitude}`);
      }, (rej) => {
        console.log("Geo error: ", rej.message);
        fetchData(places[Math.floor(Math.random()*places.length)]);
      }); } else {
        fetchData(places[Math.floor(Math.random()*places.length)]);
      } 
    };

    if (!weatherData ) {
      locationFetch();
    }

  }, [weatherData])
  


  return (
    <div className='flex-container'>
      <div className="inputFrame">
        <svg>
          <image href='https://static.wixstatic.com/media/348bae_ce2ecf1dbb524d3b83caab1eaece7451~mv2.png/v1/fill/w_122,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20FINTEK%20XL%202%20(3).png' />
        </svg>
          <p>
            Use our weather app<br/>
            to see the weather<br/> 
            around the world
          </p>
        <InputBox fetchData={fetchData} error={error}/>
      </div>

      <WeatherBox weatherData={weatherData} />
    </div>
  )
};

export default App
