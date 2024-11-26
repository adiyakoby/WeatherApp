import './App.css'
import 'typeface-heebo';
import InputBox from './Components/InputBox'
import WeatherBox from './Components/WeatherBox'

function App() {

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
