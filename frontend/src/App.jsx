import React, { useEffect, useState } from "react";
import InputBox from './Components/InputBox'
import WeatherBox from './Components/WeatherBox'
import './App.css'
import 'typeface-heebo';



function App() {
  const [search, setsearch] = useState('');
  const [weatherData, setweatherData] = useState({});

  const API_URL = import.meta.env.VITE_API_URL;


  const fetchData = () => {
    
    if (search.length > 2) {
      const options = {
        method: 'POST',
        body: JSON.stringify(search)
      };

      fetch(API_URL || 'http://localhost:5000/api', options)
      .then(response => {
        if (!response.ok) {
          setweatherData({});
        }
        console.log(response.json());        
      });
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
        <InputBox search={search} setsearch={setsearch} fetchData={fetchData}/>
      </section>
      <div className="weatherFrame">
        <aside>
          <WeatherBox/>
        </aside>
      </div>
    </div>
  )
}

export default App
