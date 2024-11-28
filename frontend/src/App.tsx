import { useEffect, useState } from "react";
import InputBox from './Components/InputBox'
import WeatherBox, {WeatherBoxProps} from './Components/WeatherBox'
import './App.css'
import 'typeface-heebo';

const API_URL = import.meta.env.VITE_API_URL;


function App() {
  const [weatherData, setweatherData] = useState<WeatherBoxProps | null>(null);
  
  const fetchData = async (search: string | any) => {
      try {
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({'location': search})
        };

      const response = await fetch(API_URL || 'http://localhost:5001/api', options)
      if (!response.ok){
        console.log("didnt get data");
      }
      const data = await response.json();
      if (data?.name !== weatherData?.name) {
        setweatherData(data);
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {

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

  }, [])
  


  return (
    <div className='flex-container'>
      <aside>
        <div >
          icon
        </div>
          <p>
            Use our weather app<br/>
            to see the weather<br/> 
            around the world
          </p>
        <InputBox fetchData={fetchData}/>
      </aside>
      <div className="weatherFrame">
        <aside>
          <WeatherBox weatherData={weatherData} />
        </aside>
      </div>
    </div>
  )
};

export default App
