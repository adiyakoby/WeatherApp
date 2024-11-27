import { useState } from "react";
import InputBox from './Components/InputBox'
import WeatherBox, {WeatherBoxProps} from './Components/WeatherBox'
import './App.css'
import 'typeface-heebo';



function App() {
  const [weatherData, setweatherData] = useState<WeatherBoxProps | null>(null);

  const API_URL = import.meta.env.VITE_API_URL;
  console.log("loaded app");

  

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
      setweatherData(await response.json());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    
    <div className='flex-container'>
      <section>
        <div>
          icon
        </div>
          <p>
            Use own weather app<br/>
            to see the weather<br/> 
            around the world
          </p>
        <InputBox fetchData={fetchData}/>
      </section>
      <div className="weatherFrame">
        <aside>
          <WeatherBox weatherData={weatherData} />
        </aside>
      </div>
    </div>
  )
}

export default App
