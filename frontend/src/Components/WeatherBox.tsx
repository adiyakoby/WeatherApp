import "./style/WeatherBox.css"

export type WeatherBoxProps = {
    name: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;
    temp_c: number;
    condition: {text: string, icon:string, code: number};
    humidity: number;
    wind_kph: number;
    precip_mm: number;
    hours: {hour: number, temp_c: number}[];

} 

type WeatherBoxComponentProps = {
    weatherData: WeatherBoxProps | null;
  };


const WeatherBox = ({weatherData}:  WeatherBoxComponentProps) => {

    
    return(
        <div className='weather-component'>
            <div className="outer-box">
                <div className="inner-box">
                    <section className="header-section">
                        {weatherData && weatherData.name} <br/>
                        <span className="sub_header">{weatherData && weatherData.country}</span>
                        <br/>
                        <span className="sub_header">{weatherData && weatherData.localtime}</span>
                    </section>
      
                    <section className="temp-section">
                        {weatherData && weatherData.temp_c}°<br/>
                        <p className="text">
                            {weatherData && weatherData.condition.text}
                        </p>
                    </section>
                    
                    <section className="info-section_h">
                        <div>
                            <p className="header">Precipitation</p>
                            <p>{weatherData && weatherData.precip_mm} mm</p>
                        </div>
                        <div>
                            <p className="header">Humidity</p>
                            <p>{weatherData && weatherData.humidity}%</p>
                        </div>
                        <div>
                            <p className="header">Wind</p>
                            <p>{weatherData && weatherData.wind_kph} km/h</p>
                        </div>
                    </section>

                    <section className="info-section_b">
                        {weatherData && weatherData.hours.map((item, index) => (
                        <div key={index} className="header">
                            {item.hour}:00 
                            <p>
                                {item.temp_c}°
                            </p>
                        </div>
                        ))}
                    </section>

                </div>
            </div>
        </div>
    );
};


export default WeatherBox;