import React, { useState } from "react";
import InputBox from './Components/InputBox'
import WeatherBox from './Components/WeatherBox'
import './App.css'
import 'typeface-heebo';



function App() {
  const [search, setsearch] = useState('');

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
        <InputBox/>
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
