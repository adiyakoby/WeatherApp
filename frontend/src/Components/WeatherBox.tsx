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

    // useEffect(()=>{}, [props]);
    return(
        <div className='weather-component'>
            <div className="outer-box">
                <div className="inner-box">
                    <section>
                      {weatherData && weatherData.name}<br/>
                      {weatherData && weatherData.country}<br/>
                      {weatherData && weatherData.localtime}
                    </section>
                    <section>
                        {weatherData && weatherData.temp_c}<br/>
                        {weatherData && weatherData.condition.text}<br/>
                    </section>
                    <section>
                    {weatherData && weatherData.precip_mm + ' mm'}<br/>
                    {weatherData && weatherData.humidity + '%'}<br/>
                    {weatherData && weatherData.wind_kph + ' km/h'}<br/>
                    </section>
                    <section>
                        {weatherData && weatherData.hours.map((item: { hour: number; temp_c: number }) => (
                            <h5 key={item.hour}>{item.temp_c} - {item.hour} </h5>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
};


export default WeatherBox;