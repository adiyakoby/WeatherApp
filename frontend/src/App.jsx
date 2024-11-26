import './App.css'
import WeatherBox from './Components/WeatherBox'

function App() {

  return (
    
    <div className='flex-container'>

      <div className="weatherFrame">
        <aside>
          <WeatherBox/>
        </aside>
      </div>
    </div>
  )
}

export default App
